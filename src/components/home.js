import React, { useState } from 'react';

const questions = [
  {
    question: "Poor mental health increases the risk for long-lasting (chronic) physical conditions like:",
    options: ["A. Diabetes", "B. Obesity", "C. Heart disease, stroke, and cancer", "D. None of the above"],
    correctAnswer: "C. Heart disease, stroke, and cancer",
    explanation: "Poor mental health can significantly impact physical health. Conditions like heart disease, stroke, and cancer are often exacerbated by chronic stress and untreated mental health issues."
  },
  {
    question: "Mental illnesses are:",
    options: ["A. Rare", "B. Very common", "C. Only affecting older adults", "D. Contagious"],
    correctAnswer: "B. Very common",
    explanation: "Mental illnesses affect a large portion of the population. Approximately 1 in 5 US adults will experience a mental illness at some point in their lives, emphasizing the commonality of these conditions."
  },
  {
    question: "Suicide is the ________ leading cause of death among people ages 10 to 24 in the United States.",
    options: ["A. 1st", "B. 2nd", "C. 3rd", "D. 4th"],
    correctAnswer: "B. 2nd",
    explanation: "Tragically, suicide is the second leading cause of death among individuals aged 10 to 24 in the United States, highlighting the urgent need for mental health support in this demographic."
  },
  {
    question: "Mental illness:",
    options: ["A. Cannot be treated", "B. Can only be treated with medication", "C. Can be treated", "D. Is always a sign of weakness"],
    correctAnswer: "C. Can be treated",
    explanation: "Mental illnesses are treatable. Various therapies, medications, and support systems are available to help individuals manage and recover from mental health disorders."
  },
  {
    question: "Mental health is:",
    options: ["A. Irrelevant", "B. Only related to intelligence", "C. An important part of overall health and well-being", "D. Only about being happy"],
    correctAnswer: "C. An important part of overall health and well-being",
    explanation: "Mental health is just as crucial as physical health. It encompasses emotional, psychological, and social well-being and plays a significant role in how people handle stress, relate to others, and make decisions."
  },
  {
    question: "If you know someone with poor mental health, you can help by:",
    options: ["A. Ignoring them", "B. Judging them", "C. Reaching out and offering support", "D. Avoiding them"],
    correctAnswer: "C. Reaching out and offering support",
    explanation: "Offering support, understanding, and encouragement can make a substantial difference to someone dealing with mental health issues. Reach out to them, listen non-judgmentally, and help them access appropriate mental health services."
  },
  {
    question: "People with mental illness are violent.",
    options: ["A. Always", "B. False", "C. Sometimes", "D. Only in extreme cases"],
    correctAnswer: "B. False",
    explanation: "Contrary to popular misconceptions, the vast majority of people with mental illness are not violent. They are more likely to be victims of violent crimes than the general population."
  },
  {
    question: "Serious mental illness costs America how much in lost earnings per year?",
    options: ["A. $50.5 billion", "B. $100.8 billion", "C. $193.2 billion", "D. $250 billion"],
    correctAnswer: "C. $193.2 billion",
    explanation: "Serious mental illness results in substantial economic costs, including lost earnings. This highlights the broader impact mental health has on society."
  },
  {
    question: "Mental illness is caused by:",
    options: ["A. Only biological factors", "B. Fate or destiny", "C. A number of factors including biological factors, stressful or traumatic life events, and long-lasting health conditions such as heart disease or cancer", "D. Supernatural forces"],
    correctAnswer: "C. A number of factors including biological factors, stressful or traumatic life events, and long-lasting health conditions such as heart disease or cancer",
    explanation: "Mental illness is complex and can be caused by a combination of biological, genetic, environmental, and lifestyle factors. Stressful life events and other health conditions can also contribute to the development of mental health disorders."
  }
];

function Home() {
  const quest = questions;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const handleAnswerSelect = (selectedAnswer) => {
    const updatedAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(updatedAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 >= quest.length) {
      setShowThanks(true);
      setShowExplanation(false);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    }
  };

  return (
    <div className="aboutus">
      <h1>Welcome to Fulton Mind Matters</h1>
      {}
      <p>At Fulton Mind Matters, we understand how important mental health is. Taking care of your mental health and having access to resources when you need it is essential.</p>

<p>With the stresses of daily life, mental health issues like depression, anxiety, addiction, and trauma are extremely common. However, mental health is still deeply misunderstood, underfunded, and stigmatized in our society.</p>

<p>Our mission is to provide the Fulton County community with the mental health resources, education, and support systems they desperately need and deserve.</p> 

 Sections on finding help, education, emergency support .

<p>Prioritizing mental health and wellbeing can change your life. You are not alone. Reach out today to start your journey.</p>


      <div className="quiz">
        <h2>Mental Health Quiz</h2>
        <p> Numerous damaging beliefs and misconceptions about mental illness persist, leading individuals to overlook their mental well-being    </p>

<p> perpetuate stigma, and hinder their ability to seek assistance. Challenge these myths by taking the quiz below and distinguishing fact from fiction.</p>






        

        {showThanks 
        ? (
          <div className="thank_you">
            <p>Thank you for taking a moment to take this quiz!</p>
          </div>
        )
        :
        (
        <>
          <p>{questions[currentQuestion].question}</p> 
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="option">
                {!showExplanation ?
                <>
                  <input
                    type="radio"
                    id={`option${index}`}
                    name="quizOption"
                    value={option}
                    onChange={() => handleAnswerSelect(option)}
                  />
                  <label htmlFor={`option${index}`}>{option}</label>
                </>
                : null
                }
                
              </div>
            ))}
          </div>
        </>
        )}
        {showExplanation && !showThanks && (
          <div className="explanation">
            <p><strong>Correct Answer:</strong> {questions[currentQuestion].correctAnswer}</p>
            <p><em>Explanation:</em> {questions[currentQuestion].explanation}</p>
          </div>
        )}
        <button onClick={nextQuestion}>Next Question</button>
      </div>
    </div>
  );
}

export default Home;