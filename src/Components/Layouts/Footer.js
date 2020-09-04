import React from "react";
import { Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
export default function Footer({ muscles, onSelect, category }) {
  const index = category
    ? muscles.findIndex((group) => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? "" : muscles[index - 1]);
  return (
    <Paper>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        centered
        value={index}
        onChange={onIndexSelect}
      >
        <Tab label="All" />
        {muscles.map((e) => (
          <Tab label={e} key={e} />
        ))}
      </Tabs>
    </Paper>
  );
}
