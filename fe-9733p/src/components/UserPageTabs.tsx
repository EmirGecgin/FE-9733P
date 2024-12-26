import React, { useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import { UserAlbumsDetailsPage, UserPostDetailsPage, UserTodosDetailsPage } from '../routes';
import UserAlbumsPage from '../routes/user-albums-page';
import UserTodosPage from '../routes/user-todos-page';

interface Props {
  userId: string; // Bu kısmı ekledik
}

const UserPageTabs: React.FC<Props> = ({ userId }) => {
  const [activeKey, setActiveKey] = useState<string>("posts");

  const handleSelect = (key: string | null) => {
    if (key) setActiveKey(key);
  };

  return (
    <Container className="mt-4">
      <Tabs
        activeKey={activeKey}
        onSelect={handleSelect}
        className="mb-3"
        justify
      >
        <Tab eventKey="posts" title="Posts">
          {activeKey === "posts" && <UserPostDetailsPage userId={userId} />}
        </Tab>
        <Tab eventKey="albums" title="Albums">
          {activeKey === "albums" && <UserAlbumsPage userId={userId} />}
        </Tab>
        <Tab eventKey="todos" title="Todos">
          {activeKey === "todos" && <UserTodosPage userId={userId} />}
        </Tab>
      </Tabs>
    </Container>
  );
};

export default UserPageTabs;
