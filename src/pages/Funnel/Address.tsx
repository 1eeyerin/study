import { Label } from '@radix-ui/react-label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import type { FunnelProps } from './types';

const Address = ({ onNext }: FunnelProps) => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="max-w-md mx-auto h-dvh bg-white pt-10 flex flex-col justify-between">
        <div className="flex flex-col gap-2 p-4">
          <strong className="text-2xl mb-10 block">주소를 입력해주세요</strong>
          <div className="flex flex-col gap-2">
            <Label htmlFor="address">주소</Label>
            <Input id="address" type="text" placeholder="주소" />
          </div>
        </div>
        <div className="sticky bottom-0 border-t border-gray-200 p-4">
          <Button className="w-full" onClick={onNext}>
            입력한 주소로 유심 받기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Address;
