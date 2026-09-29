'use client';
import { useRouter } from "next/navigation";

type ButtonProps = {
  name: string;
  href?: string;
  onClick?: () => void;
  btnContainer: string;
  btnPing: string;
  btnPingDot: string;
}

export function Button({ name, href, onClick, btnContainer, btnPing, btnPingDot }: ButtonProps) {

  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <button onClick={handleClick} className={`${btnContainer} cus-btn`}>
      <span className="relative flex">
        <span className={`${btnPing} cus-btn-ping`} />
        <span className={`${btnPingDot} cus-btn-ping-dot`} />
      </span>
      {name}
    </button>
  );
}