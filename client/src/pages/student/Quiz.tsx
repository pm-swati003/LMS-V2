import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight, RefreshCcw } from "lucide-react";
import { Link } from "wouter";

const QUESTIONS = [
  {
    id: 1,
    question: "Which of the following is NOT a benefit of the Compound Component pattern?",
    options: [
      { id: "a", text: "Implicit state sharing" },
      { id: "b", text: "Flexible UI composition" },
      { id: "c", text: "Improved performance by default" }, // Correct
      { id: "d", text: "Cleaner API surface" }
    ],
    correctAnswer: "c",
    explanation: "Compound components are primarily about API design and composition flexibility. They don't inherently improve performance (and can sometimes hurt it if not optimized with useMemo/memo) due to context propagation."
  },
  {
    id: 2,
    question: "What is the primary purpose of React.memo?",
    options: [
      { id: "a", text: "To cache API responses" },
      { id: "b", text: "To prevent unnecessary re-renders of a component" }, // Correct
      { id: "c", text: "To memorize variable values between renders" },
      { id: "d", text: "To manage global state" }
    ],
    correctAnswer: "b",
    explanation: "React.memo is a higher-order component that memoizes the result of a component render, preventing re-renders if props haven't changed."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleSubmit = () => {
    if (!selectedOption) return;
    
    const isCorrect = selectedOption === QUESTIONS[currentQuestion].correctAnswer;
    if (isCorrect) setScore(score + 1);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 animate-in zoom-in duration-300">
        <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center">
          {score === QUESTIONS.length ? (
            <CheckCircle2 className="size-12 text-primary" />
          ) : (
            <AlertCircle className="size-12 text-amber-500" />
          )}
        </div>
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-heading font-bold">Quiz Completed!</h2>
          <p className="text-muted-foreground text-lg">
            You scored {score} out of {QUESTIONS.length}
          </p>
        </div>

        <div className="flex gap-4">
          <Button variant="outline" onClick={handleRetry}>
            <RefreshCcw className="mr-2 size-4" /> Retry Quiz
          </Button>
          <Link href="/student/course/123">
            <Button>Back to Course</Button>
          </Link>
        </div>
      </div>
    );
  }

  const question = QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  return (
    <div className="max-w-3xl mx-auto py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8 space-y-2">
        <div className="flex justify-between text-sm font-medium text-muted-foreground">
           <span>Question {currentQuestion + 1} of {QUESTIONS.length}</span>
           <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="border-border/50 shadow-lg">
        <CardHeader>
          <h2 className="text-2xl font-heading font-bold">{question.question}</h2>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup 
            value={selectedOption || ""} 
            onValueChange={!isAnswered ? setSelectedOption : undefined}
            className="space-y-3"
          >
            {question.options.map((option) => {
              let itemClass = "flex items-center space-x-3 space-y-0 rounded-lg border p-4 transition-colors hover:bg-muted/50 cursor-pointer";
              
              if (isAnswered) {
                if (option.id === question.correctAnswer) {
                  itemClass = "flex items-center space-x-3 space-y-0 rounded-lg border border-green-500 bg-green-50 dark:bg-green-900/20";
                } else if (selectedOption === option.id) {
                  itemClass = "flex items-center space-x-3 space-y-0 rounded-lg border border-red-500 bg-red-50 dark:bg-red-900/20";
                } else {
                  itemClass += " opacity-50";
                }
              } else if (selectedOption === option.id) {
                itemClass = "flex items-center space-x-3 space-y-0 rounded-lg border border-primary bg-primary/5";
              }

              return (
                <div key={option.id} className={itemClass} onClick={() => !isAnswered && setSelectedOption(option.id)}>
                  <RadioGroupItem value={option.id} id={option.id} disabled={isAnswered} />
                  <Label htmlFor={option.id} className="flex-1 cursor-pointer font-medium text-base">
                    {option.text}
                  </Label>
                  {isAnswered && option.id === question.correctAnswer && <CheckCircle2 className="text-green-600 size-5" />}
                  {isAnswered && selectedOption === option.id && option.id !== question.correctAnswer && <XCircle className="text-red-600 size-5" />}
                </div>
              );
            })}
          </RadioGroup>

          {isAnswered && (
             <div className="bg-muted/50 p-4 rounded-lg border border-border/50 animate-in fade-in">
               <p className="font-semibold mb-1">Explanation:</p>
               <p className="text-muted-foreground">{question.explanation}</p>
             </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-end p-6 bg-muted/20">
          {!isAnswered ? (
            <Button onClick={handleSubmit} disabled={!selectedOption} size="lg">Submit Answer</Button>
          ) : (
            <Button onClick={handleNext} size="lg">
              {currentQuestion < QUESTIONS.length - 1 ? "Next Question" : "Finish Quiz"} 
              <ArrowRight className="ml-2 size-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
