import { Button } from '../../../components/ui/button';

const Finish = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="max-w-md mx-auto h-dvh bg-white pt-10 flex flex-col justify-between">
        <div className="flex flex-col gap-2 p-4 items-center justify-center h-full">
          <strong className="text-2xl block">가입 완료!</strong>
          <p className="text-md text-gray-500 text-center leading-relaxed mt-5">
            가입 완료되었습니다.
            <br />
            회원님의 아이디는 <strong className="font-semibold text-blue-500">
              test@test.com
            </strong>{' '}
            입니다.
          </p>
        </div>
        <div className="sticky bottom-0 border-t border-gray-200 p-4">
          <Button className="w-full">다음</Button>
        </div>
      </div>
    </div>
  );
};

export default Finish;
