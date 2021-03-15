import Text, { TextLight } from 'components/Text';

import { Wrapper, Inner, ProfileLink, ProfileAvatar, ProfileInfo } from './Header.styled';

export default function Header() {
  const userFake = { name: 'Julie Howard', role: 'Admin', picUrl: null };

  return (
    <Wrapper>
      <Inner>
        <ProfileLink href="#profile-page">
          <ProfileAvatar as="span" src={userFake.picUrl} />
          <ProfileInfo>
            <Text size="bodyMedium">{userFake.name}</Text>
            <TextLight size="bodyCaption">{userFake.role}</TextLight>
          </ProfileInfo>
        </ProfileLink>
      </Inner>
    </Wrapper>
  );
}
