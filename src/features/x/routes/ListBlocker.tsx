import { useState, useEffect } from "react";

// import { Spinner } from '@/components/Elements'
import { ContentLayout } from "@/components/Layout";
// import { formatDate } from '@/utils/format';
import { Button } from "@/components/Elements";

import { invoke } from "@tauri-apps/api/tauri";

export const ListBlocker = (): JSX.Element => {
  // return (
  //   <div className="w-full h-48 flex justify-center items-center">
  //     <Spinner size="lg" />
  //   </div>
  // )

  const [data, setData] = useState<string>("");

  // useEffect(() => {
  //   const test = async (): Promise<void> => {
  //     try {
  //       const result = await invoke("x_get_api");
  //       console.log(result);
  //       setData(result.origin);
  //     } catch (err) {
  //       setData("err");
  //     }
  //   };
  //   void test();
  // },[]);

  return (
    <>
      <ContentLayout title={"ListBlocker"}>
        <span className="text-xs font-bold">{"OK?"}</span>
        <div className="mt-6 flex flex-col space-y-16"></div>
        <p>{data}</p>

        <Button
            onClick={() => {
              const test = async (): Promise<void> => {
                try {
                  const result = await invoke("x_get_api");
                  console.log(result);
                  setData(result.origin);
                } catch (err) {
                  setData("err");
                }
              };
              void test();
            }}
          >
            Primary Button
          </Button>
      </ContentLayout>
    </>
  );
};
