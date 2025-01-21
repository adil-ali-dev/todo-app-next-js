import Link from 'next/link';
import { Logo, PlusIcon } from '../assets/homepage/icons';
import Button from '../components/common/Button';
import TaskList from '@/components/TaskList';
export default function Home() {

  return (
    <div >
      {/* Logo Component */}
      <div className="flex flex-col justify-center items-center">
        <div className="relative top-[72px]">
          <Logo />
        </div>
        {/* Input Component */}




        <div className="relative top-[173px] w-full">
          <div className='flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 w-full'>
            <div>
              <Link href={'/create'}>
                <Button
                  disabled={false}
                  icon={<PlusIcon />}
                  classNames="w-full sm:w-[736px] text-[16px] leading-[19px] font-semibold px-[37px] py-[16px] bg-[#1E6F9F] hover:bg-[#1E6F9FCC] text-[#FEFEFE] rounded-[12px] flex items-center justify-center"
                  onClick={undefined}
                >
                  Create
                </Button>
              </Link>
              <TaskList></TaskList>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
}
