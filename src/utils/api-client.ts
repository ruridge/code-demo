import { QueryClient, useQuery, useQueryClient } from 'react-query';

const apiURL = process.env.REACT_APP_VERCEL_URL ? '/api' : 'http://localhost:4002';

export async function client(url: URL) {
  return fetch(url.href).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

type EmploymentType = 'both' | 'contractor' | 'employee';
type Person = { name: string; employment: 'contractor' | 'employee' };
type People = Person[];

export function usePeopleQuery(employment: EmploymentType, searchQuery: string) {
  const queryClient = useQueryClient();
  const url = new URL('/people', apiURL);
  if (searchQuery) {
    url.searchParams.set('name_like', searchQuery);
  }
  if (employment && employment !== 'both') {
    url.searchParams.set('employment', employment);
  }
  return useQuery({
    queryKey: [
      'search',
      {
        searchQuery,
        employment,
      },
    ],
    queryFn: () => client(url).then((data) => data),
    placeholderData: () => {
      const allPeople = queryClient.getQueryData<People>([
        'search',
        { employment: 'both', query: '' },
      ]);
      const filteredData =
        allPeople?.filter((data) => {
          return (
            data.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()) &&
            (employment === 'both' ||
              (employment === 'contractor' && data.employment === 'contractor') ||
              (employment === 'employee' && data.employment === 'employee'))
          );
        }) ?? [];
      // return filteredData;
      return filteredData.length > 0 ? filteredData : undefined;
    },
  });
}
