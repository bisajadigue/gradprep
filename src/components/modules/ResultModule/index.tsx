import Image from "next/image";
import { Button } from "@/components/elements";
import { GrNext, GrPrevious } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import { Label } from "@/components/elements/Label";
import { api } from "@/utils/api";
import { useEffect, useState } from "react";
import { QuestionProps } from "./interface";
import { QuestionDetailProps } from "./interface";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

type validOptions = "a" | "b" | "c" | "d";

export const ResultModule: React.FC = () => {
  const [path, setPath] = useState<string>("");

  const [path1, setPath1] = useState<string>("");

  const { data: getquestion, isLoading } = api.test.getQuestionById.useQuery({
    questionId: path,
  });

  const router = useRouter();

  const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [number, setNumber] = useState(0);

  const [question, setQuestion] = useState<QuestionDetailProps>();
  const [optionD, setOptionD] = useState(false);
  const [optionC, setOptionC] = useState(false);

  const [optionB, setOptionB] = useState(false);

  const [optionA, setOptionA] = useState(false);

  const [clicked, setClicked] = useState<validOptions | null>(null);

  const [answer, setAnswer] = useState("a");

  const [last, setLast] = useState(false);
  const utils = api.useContext();

  const { data: getquestions, isLoading: loading } =
    api.test.getAllQuestionFromTestId.useQuery({
      testId: question?.question?.testId,
    });

  const createTestMutation = api.test.recordQuestionAttempt.useMutation();

  const handleNext = async (e: any) => {
    if (number + 1 == getquestions.length) {
      // toast udah sampe akhir
      setLast(!last);
      toast.info("Ini soal trakhir!");
    } else {
      setNumber(number + 1);

      await router.push(`/questions/${getquestions[number + 1]?.id}`);

      // window.location.reload();

      if (!isLoading && question?.questionAttempt?.choiced == "") {
        setAnswer("");
        setOptionA(optionA);
        setOptionB(optionB);
        setOptionC(optionC);
        setOptionD(optionD);
      } else if (!isLoading && question?.questionAttempt?.choiced == "a") {
        setAnswer("a");
        setOptionA(!optionA);
        setOptionB(optionB);
        setOptionC(optionC);
        setOptionD(optionD);
      } else if (!isLoading && question?.questionAttempt?.choiced == "b") {
        setAnswer("b");
        setOptionA(optionA);
        setOptionB(!optionB);
        setOptionC(optionC);
        setOptionD(optionD);
      } else if (!isLoading && question?.questionAttempt?.choiced == "c") {
        setAnswer("c");
        setOptionA(optionA);
        setOptionB(optionB);
        setOptionC(!optionC);
        setOptionD(optionD);
      } else if (!isLoading && question?.questionAttempt?.choiced == "d") {
        setAnswer("d");
        setOptionA(optionA);
        setOptionB(optionB);
        setOptionC(optionC);
        setOptionD(!optionD);
      }
    }
  };

  const handlePrevious = async () => {
    if (number - 1 < 0) {
      toast.info("Ini soal pertama!");
    } else {
      setLast(false);
      setNumber(number - 1);

      await router.push(
        `/questions/${getquestions[number - 1]?.id}`,
        undefined,
      );

      // window.location.reload();

      if (!isLoading && question?.questionAttempt?.choiced == "") {
        setAnswer("");
        setOptionA(optionA);
        setOptionB(optionB);
        setOptionC(optionC);
        setOptionD(optionD);
      } else if (!isLoading && question?.questionAttempt?.choiced == "a") {
        setAnswer("a");
        setOptionA(!optionA);
        setOptionB(optionB);
        setOptionC(optionC);
        setOptionD(optionD);
      } else if (!isLoading && question?.questionAttempt?.choiced == "b") {
        setAnswer("b");
        setOptionA(optionA);
        setOptionB(!optionB);
        setOptionC(optionC);
        setOptionD(optionD);
      } else if (!isLoading && question?.questionAttempt?.choiced == "c") {
        setAnswer("c");
        setOptionA(optionA);
        setOptionB(optionB);
        setOptionC(!optionC);
        setOptionD(optionD);
      } else if (!isLoading && question?.questionAttempt?.choiced == "d") {
        setAnswer("d");
        setOptionA(optionA);
        setOptionB(optionB);
        setOptionC(optionC);
        setOptionD(!optionD);
      }
    }
  };
  const testId = question?.question.testId ?? "";

  const { data: testbyid } = api.test.getTestById.useQuery({
    testId: testId,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParts = window.location.href.split("/");
      const questId = urlParts[urlParts.length - 1];
      const testId = urlParts[urlParts.length - 2];

      if (questId) {
        setPath(questId);
      }

      if (testId) {
        setPath1(testId);
      }

      // console.log("rsia");
      console.log(path);
      console.log("risaaa");

      if (isLoading) setQuestions([]);
      // else setQuestions(getquestions);
      else {
        setQuestion(getquestion);
        setQuestions(getquestions);
        console.log("jaawaban");
        setClicked(
          getquestion?.questionAttempt?.choiced as validOptions | null,
        );
      }

      // console.log(getquestions[0]);
      // console.log(questions[0]);
      // console.log(getquestions[0]);

      // console.log(getquestions?.pop());
    }
  }, [getquestion, getquestions, isLoading, number, path, router.pathname]);

  useEffect(() => {
    if (clicked !== null && typeof clicked !== "undefined") {
      const testAttemptId = testbyid?.testAttempt?.id ?? "";
      const questionId = question?.question?.id ?? "";

      void createTestMutation.mutateAsync({
        testAttemptId,
        questionId,
        choiced: clicked,
      });
    }
    console.log(clicked, "clicked");
  }, [clicked, testbyid, question]);

  return (
    <>
      {/* Hero */}
      <div className=" relative flex h-full flex-col items-center justify-center bg-primary pt-40 text-white md:flex-row md:pt-60 lg:pt-60">
        {/* <ToastContainer /> */}
        <div className="justify-left container flex flex-col items-center sm:relative md:absolute md:flex-row lg:absolute lg:flex-row">
          <Image
            className="mr-5 h-[190px] w-[200px] rounded-[15px] object-cover group-hover:scale-105"
            src={"/assets/logo/fulbright-logo.png"}
            alt={""}
            width={300}
            height={300}
          />
          <div className="px-3 text-left">
            {/* <div className=" absolute -left-32 -top-48 z-0 h-[80vh] w-[80vh] rounded-full bg-[#5056ED]/[.42]"></div>
            <div className=" absolute -left-40 top-64 z-0 h-[50vh] w-[50vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -right-48 bottom-12 z-0 h-[40vh] w-[40vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -bottom-56 -right-24 z-0 h-[64vh] w-[64vh] rounded-full bg-[#946CE8]/[.62]"></div> */}
            <h2 className="pt-5 text-xl tracking-wide md:pt-12 md:text-3xl lg:pt-12 lg:text-4xl">
              Ujian Simulasi 2022
            </h2>
            <div className="text-white md:text-black lg:text-black">
              <div className="mt-3 flex items-center justify-between">
                <p>Sisa waktu:</p>
                <Label> 12:55</Label>
              </div>

              <div className="mb-5 mt-3 flex items-center justify-between">
                <p>Pertanyaan terjawab:</p>
                <Label>19/20</Label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 flex justify-center pl-0 pt-0 md:justify-start md:pl-72 md:pt-20 lg:justify-start lg:pl-72 lg:pt-20">
        <Button variant={"primary"} size={"md"}>
          Kumpulkan
          <AiOutlineCheck
            color="white"
            size={24}
            className="my-auto active:scale-[80%]"
          />
        </Button>
      </div>
      <div className="px-10 pt-10 md:px-20 md:pt-20 lg:px-20 lg:pt-20">
        <div>
          <h3 className="mb-4 text-center">Question 1/5</h3>
          <p>{question?.question.title}</p>
          <p className="mt-5">Pilih jawaban yang paling tepat.</p>
        </div>
        <div>
          <div className="flex flex-col justify-start">
            <div className="flex flex-col justify-start">
              <label className="mt-3 inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-gray-600"
                  onClick={() => {
                    setClicked("a");
                    // setAnswer("a");
                    // setOptionA(!optionA);
                    // void onSubmit();
                  }}
                  checked={clicked === "a"}
                />
                <span className="ml-2 text-gray-700">
                  {question?.question.optionA}
                </span>
              </label>

              <label className="mt-3 inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-red-600"
                  onClick={() => {
                    setClicked("b");
                    // setAnswer("b");
                    // setOptionB(!optionB);
                    // void onSubmit();
                  }}
                  checked={clicked === "b"}
                />
                <span className="ml-2 text-gray-700">
                  {question?.question.optionB}
                </span>
              </label>

              <label className="mt-3 inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-orange-600"
                  onClick={() => {
                    setClicked("c");
                    // setAnswer("c");
                    // setOptionC(!optionC);
                    // void onSubmit();
                  }}
                  checked={clicked === "c"}
                />
                <span className="ml-2 text-gray-700">
                  {question?.question.optionC}
                </span>
              </label>

              <label className="mt-3 inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-yellow-600"
                  onClick={() => {
                    setClicked("d");
                    // setAnswer("d");
                    // setOptionD(!optionD);
                    // void onSubmit();
                  }}
                  checked={clicked === "d"}
                />
                <span className="ml-2 text-gray-700">
                  {question?.question.optionD}
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="my-10 flex items-center justify-between gap-5">
          {" "}
          <Button variant={"primary"} size={"md"}>
            <GrPrevious
              fill="white"
              color="white"
              size={24}
              className="my-auto active:scale-[80%]"
            />
            <a
              onClick={() => void handlePrevious()}
              className="hover:text-primary"
            >
              Previous
            </a>
          </Button>
          <Button variant={"primary"} size={"md"}>
            <a
              onClick={(e) => void handleNext(e)}
              // href={`http://localhost:3000/questions/${questions[number]?.id}`}
              className="hover:white"
            >
              {last ? "Kumpulkan" : "Next"}
              {last ? (
                <AiOutlineCheck
                  color="white"
                  size={24}
                  className="my-auto active:scale-[80%]"
                />
              ) : (
                <GrNext
                  color="white"
                  size={24}
                  className="my-auto active:scale-[80%]"
                />
              )}
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};
