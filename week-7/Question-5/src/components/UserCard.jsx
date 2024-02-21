/* eslint-disable react/prop-types */
import { Card, Avatar, Text, Group, Button } from "@mantine/core";
// import { NavLink } from "@mantine/core/lib/components";
import classes from "./UserCard.module.css";

// const stats = [
//   { value: "34K", label: "Followers" },
//   { value: "187", label: "Follows" },
//   { value: "1.6K", label: "Posts" },

function formatDate(created_at) {
  const date = new Date(created_at);
  
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  return date.toLocaleDateString('en-US', options);
}

// ];

export function UserCard({ data, date }) {
  
  return (
    <Card withBorder padding="xl" radius="md" className={classes.card} maw={"30%"} mt={"2rem"} bg={"dark"} c={"white"}>
      <Card.Section
        h={140}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)",
        }}
      />
      <Avatar
        src={data.avatar_url}
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />

      <Text ta="center" fz="lg" fw={500} mt="sm">
        {data.name}
      </Text>
        <Group mt="md" justify="center" gap={30}>
          <Text ta="center" fz="lg" fw={300} maw={350}>
            {data.bio}
          </Text>
        </Group>
      <Group mt="md" justify="center" gap={30}>
        <div>
          <Text ta="center" fz="lg" fw={500}>
            Followers
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            {data.followers}
          </Text>
        </div>
        <div>
          <Text ta="center" fz="lg" fw={500}>
            Following
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            {data.following}
          </Text>
        </div>
        <div>
          <Text ta="center" fz="lg" fw={500}>
            Public Repos
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            {data.public_repos}
          </Text>
        </div>
      </Group>
      <Group mt="md" justify="center" gap={30}>
        <div>
          <Text ta="center" fz="lg" fw={500}>
            Twitter
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            <a href={`https://www.twitter.com/${data.twitter_username}`} target="_blank" rel="noreferrer">{data.twitter_username}</a>
          </Text>
        </div>
        <div>
          <Text ta="center" fz="lg" fw={500}>
            Created at
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            {formatDate(date)}
          </Text>
        </div>
        <div>
          <Text ta="center" fz="lg" fw={500}>
            Location
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            {data.location}
          </Text>
        </div>
      </Group>
      
        <a
          href={`https://www.github.com/${data.login}`}
          target="_blank"
          rel="noreferrer"
        >
         <Button fullWidth radius="md" mt="xl" size="md" variant="default">
          Follow on github
      </Button>
        </a>
    </Card>
  );
}
