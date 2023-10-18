import { GenericCard } from "../../GenericCard";
import { Button } from "@/components/elements/Button";
import { TestDetailCardProps } from "./interface";
import { useState, useEffect } from "react";
import { api } from "@/utils/api";
import { QuestionsProps } from "./interface";
import { QuestionProps } from "@/components/modules/QuestionModule/interface";
import { useRouter } from "next/router";

export const TestDetailCard: React.FC<TestDetailCardProps> = ({
  className,
  id,
}) => {
  const [path, setPath] = useState<string>("");
  const { data: getquestions, isLoading } =
    api.test.getAllQuestionFromTestId.useQuery({
      testId: path,
    });

  const router = useRouter();
  const [questions, setQuestions] = useState<QuestionsProps[]>([]);
  const [question, setQuestion] = useState<QuestionProps>();

  useEffect(() => {
    const urlParts = window.location.href.split("/");
    const testId = urlParts[urlParts.length - 1];
    const index = 0;

    if (testId) {
      setPath(testId);
    }

    // console.log(testId);
    // console.log(getquestions[0]);
    if (isLoading) setQuestions([]);
    else {
      setQuestions(getquestions!);
      setQuestion(getquestions[0]);
    }
    console.log(getquestions);

    // const firstElement = (questions ?? [])[0];

    console.log("masuk");
    // console.log(getquestions[0]);

    // console.log(path);

    // console.log(getquestions[0]);
    // setQuestion(getquestions[0]);
    // console.log(getquestions && getquestions[0]);

    // quests = getquestions[0];
    // console.log(quests);
    // setQuestion(getquestions[0]);

    // console.log("adaa");
    // console.log(question);
  }, [getquestions, isLoading]);

  const createTestMutation = api.test.startTest.useMutation();

  const handleStart = async () => {
    // const testId = question?.id ?? "";

    const urlParts = window.location.href.split("/");
    const testId = urlParts[urlParts.length - 1] ?? "";

    console.log("test id", testId);

    await createTestMutation.mutateAsync({
      testId: testId,
    });

    await router.push(
      `http://localhost:3000/questions/${question?.id}`,
      undefined,
      {
        shallow: true,
      },
    );

    // window.location.reload();
  };

  return (
    <>
      <GenericCard
        className={`${className} mt-10 flex w-[300px] flex-col text-center md:mt-0 lg:mt-0`}
      >
        <h3 className="font-bold md:text-lg lg:text-xl">Waktu Pengerjaan</h3>
        <p>120 menit</p>
        <h3 className="font-bold md:text-lg lg:text-xl">Jumlah Pertanyaan</h3>
        <p>25 pertanyaan</p>
        <div className="my-3 justify-center">
          <Button className="w-24" variant={"primary"} size={"md"}>
            <a
              onClick={() => void handleStart()}
              // href={`http://localhost:3000/questions/${question?.id}`}
              className="hover:text-primary"
            >
              Mulai
            </a>
          </Button>
        </div>

        <p>Anda hanya bisa mengerjakan test ini satu buah kali.</p>
      </GenericCard>
    </>
  );
};
