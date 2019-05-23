import * as React from "react";
import { SortablePane, Pane } from "react-sortable-pane";
//import { textStyle, paneStyle } from './styles';

const paneStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  backgroundColor: "#123442"
};

const textStyle = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#aaa"
};

function App() {
  const panes = [0, 1, 2].map(key => (
    <Pane
      key={key}
      defaultSize={{ width: "100%", height: 120 }}
      style={paneStyle}
    >
      <p style={textStyle}>00{key}</p>
    </Pane>
  ));
  return (
    <div style={{ padding: "10px" }}>
      <SortablePane direction="vertical" margin={20}>
        {panes}
      </SortablePane>
    </div>
  );
}

export default App;
