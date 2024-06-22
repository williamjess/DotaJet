import { cn } from "@/utils/cn";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 25).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "darak:w-0.5 absolute left-1/2 top-1/2 h-1 w-1 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-blue-500 shadow-[0_0_0_1.1px_#0068FF] dark:h-0.5",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-b;ue-500 before:to-transparent before:content-[''] dark:before:from-blue-300",
            className,
          )}
          style={{
            top: -90,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
