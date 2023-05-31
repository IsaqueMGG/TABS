import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: '/',
        }}
      />
      <Tabs.Screen
        name="telaa"
        options={{
          href: 'telaa',
        }}
      />
      <Tabs.Screen
        name="telab"
        options={{
          href: 'telab',
        }}
      />
    </Tabs>
  );
}
