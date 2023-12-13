import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import QuizDetailsEditor from "./quizdetailseditor";
import QuizQuestionEditor from "./quizquestionseditor";

function QuizEditor() {

  return (
    <Tabs>
      <TabList>
        <Tab>Details</Tab>
        <Tab>Questions</Tab>
      </TabList>
      <TabPanel>
        <QuizDetailsEditor/>
      </TabPanel>
      <TabPanel>
        <QuizQuestionEditor/>
      </TabPanel>
    </Tabs>
  );
}

export default QuizEditor;