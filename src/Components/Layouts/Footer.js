import React from "react";
import { Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
export default function Footer({ muscles }) {
  return (
    <Paper>
      <Tabs indicatorColor="primary" textColor="primary" centered value={0}>
        <Tab label="All" />
        {muscles.map((e) => (
          <Tab label={e} key={e} />
        ))}
      </Tabs>
    </Paper>
  );
}
