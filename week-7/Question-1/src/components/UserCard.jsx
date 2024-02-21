import { Card, Avatar, Text, Group, Button } from "@mantine/core";
// import { NavLink } from "@mantine/core/lib/components";
import classes from "./UserCard.module.css";

const stats = [
  { value: "34K", label: "Followers" },
  { value: "187", label: "Follows" },
  { value: "1.6K", label: "Posts" },
];

export function UserCard() {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section
        h={140}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)",
        }}
      />
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <div style={{display: "flex", justifyContent: "center", gap: ".5rem"}}>
        <Text ta="center" fz="lg" fw={500} mt="sm">
          Yunus Shaikh
        </Text>
        <Text ta={"center"} fz={"sm"} fw={300} mt={'.9rem'}>
            21
        </Text>
      </div>
      <Text ta="center" fz="sm" c="dimmed">
        Fullstack engineer
      </Text>
      <Group mt="md" justify="center" gap={30}>
        {items}
      </Group>
      <Button fullWidth radius="md" mt="xl" size="md" variant="default">
        <a href="https://www.twitter.com/Yunus_Shaikh29" target="_blank" rel="noreferrer">Follow</a>
      </Button>
    </Card>
  );
}
