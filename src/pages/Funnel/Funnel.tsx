import { Input } from '../../components/ui/input';

const Funnel = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="max-w-md mx-auto h-screen bg-white p-4 py-10">
        <strong className="text-2xl">지금 휴대폰 번호를 그대로 쓸까요?</strong>
        <Input type="email" placeholder="Email" />
      </div>
    </div>
  );
};

export default Funnel;
