import { Label } from '@radix-ui/react-label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

const ResidentId = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="max-w-md mx-auto h-dvh bg-white pt-10 flex flex-col justify-between">
        <div className="flex flex-col gap-2 p-4">
          <strong className="text-2xl mb-10 block">주민등록번호 뒷자리를 입력해주세요</strong>
          <div className="flex flex-col gap-2">
            <Label htmlFor="residentId">주민등록번호</Label>
            <Input id="residentId" type="number" placeholder="9999999" maxLength={7} />
          </div>
        </div>
        <div className="sticky bottom-0 border-t border-gray-200 p-4">
          <Button className="w-full">다음</Button>
        </div>
      </div>
    </div>
  );
};

export default ResidentId;
