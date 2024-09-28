import { Label } from '@radix-ui/react-label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import type { FunnelProps } from './types';

const Register = ({ onNext }: FunnelProps) => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="max-w-md mx-auto h-dvh bg-white pt-10 flex flex-col justify-between">
        <div className="flex flex-col gap-2 p-4">
          <strong className="text-2xl mb-10 block">지금 휴대폰 번호를 그대로 쓸까요?</strong>
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">휴대폰 번호</Label>
            <Input id="phone" type="text" placeholder="010-0000-0000" />
          </div>
        </div>
        <div className="sticky bottom-0 border-t border-gray-200 p-4">
          <Button className="w-full" onClick={onNext}>
            내 번호 그대로 쓰기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
