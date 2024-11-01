import React, { useState } from 'react';
import { Row, Col, Card, Button, Radio } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import logoimg from "./../../assets/images/icons/herry.png";

const Ayuda = () => {
  const [selectedOption, setSelectedOption] = useState(1); // 1 for Harry Potter, 2 for Don Quixote

  const handleRadioChange = (value) => {
    setSelectedOption(value);
    console.log(`Selected option: ${value}`);
  };

  const getContent = () => {
    if (selectedOption === 1) {
      return {
        title: "1. Harry Potter",
        heading: "Harry Potter Overview",
        story: (
          <>
            Harry Potter, an orphaned boy, lives with his neglectful relatives, the Dursleys. On his eleventh birthday,
            he learns he is a wizard and receives an invitation to attend Hogwarts School of Witchcraft and Wizardry.
            At Hogwarts, he makes friends, including Ron Weasley and Hermione Granger, and discovers his past,
            including the truth about his parents’ deaths at the hands of the dark wizard Voldemort. Harry learns
            about the magical world, makes new friends, and faces challenges, including a confrontation with Voldemort.
          </>
        ),
        additionalInfo: (
          <>
            This section gives a brief overview of the Harry Potter series, its themes, and characters, delving into the magical world and Harry's journey.
          </>
        )
      };
    } else {
      return {
        title: "2. Don Quixote",
        heading: "Don Quixote Overview",
        story: (
          <>
            Don Quixote is a novel by Miguel de Cervantes. It follows the adventures of a nobleman, Alonso Quixano, who reads so many chivalric romances that he loses his sanity and decides to become a knight-errant, adopting the name Don Quixote. He travels the countryside with his loyal squire, Sancho Panza, in search of adventure, leading to many humorous and poignant moments.
          </>
        ),
        additionalInfo: (
          <>
            This section explores the themes and characters of Don Quixote, focusing on the impact of its satire and its place in literature.
          </>
        )
      };
    }
  };

  const content = getContent();

  // Function to handle button clicks for navigation
  const handleNavigation = (direction) => {
    if (direction === 'left' && selectedOption > 1) {
      setSelectedOption(selectedOption - 1);
    } else if (direction === 'right' && selectedOption < 2) {
      setSelectedOption(selectedOption + 1);
    }
  };

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card style={{ padding: 0 }}>
            <div>
              <p>StoryWeaver is an award-winning</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <p onClick={() => handleRadioChange(1)} style={{ cursor: 'pointer', margin: 0 }}>
                1. Harry Potter Heading
              </p>
              <p style={{ margin: 0 }}>
                <Radio checked={selectedOption === 1} onChange={() => handleRadioChange(1)} />
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p onClick={() => handleRadioChange(2)} style={{ cursor: 'pointer', margin: 0 }}>
                2. Don Quixote
              </p>
              <p style={{ margin: 0 }}>
                <Radio checked={selectedOption === 2} onChange={() => handleRadioChange(2)} />
              </p>
            </div>
          </Card>
        </Col>
        <Col span={16}>
          <Card style={{ padding: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button icon={<LeftOutlined />} onClick={() => handleNavigation('left')} disabled={selectedOption === 1} />
              <p style={{ flexGrow: 1, textAlign: 'center', margin: 0 }}>
                {content.title}
              </p>
              <Button icon={<RightOutlined />} onClick={() => handleNavigation('right')} disabled={selectedOption === 2} />
            </div>
            <div>
              <h5>{content.heading}</h5>
            </div>
            <div>
              <p>{content.story}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={logoimg} alt="Selected" style={{ width: '200px', height: '200px' }} />
            </div>
            <div>
              <p>{content.additionalInfo}</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Ayuda;
