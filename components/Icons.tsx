import cn from "clsx";
import { ReactNode } from "react";

export function IconMoon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.4176 20.5 20.0476 17.1303 20.4608 12.8207C20.4801 12.6202 20.377 12.4277 20.1995 12.3324C20.0219 12.2372 19.8045 12.2578 19.6481 12.3848C18.7884 13.0824 17.6937 13.5 16.5 13.5C13.7386 13.5 11.5 11.2614 11.5 8.5C11.5 6.8599 12.2892 5.40423 13.5106 4.49167C13.6721 4.37101 13.7453 4.16516 13.6963 3.96961C13.6473 3.77406 13.4857 3.62706 13.2864 3.59678C12.8666 3.53302 12.437 3.5 12 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconSun({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25Z"
        fill="currentColor"
      />
      <path
        d="M12 6.25C8.82436 6.25 6.25 8.82436 6.25 12C6.25 15.1756 8.82436 17.75 12 17.75C15.1756 17.75 17.75 15.1756 17.75 12C17.75 8.82436 15.1756 6.25 12 6.25Z"
        fill="currentColor"
      />
      <path
        d="M5.45928 4.39862C5.16638 4.10573 4.69151 4.10573 4.39862 4.39862C4.10572 4.69152 4.10572 5.16639 4.39862 5.45929L5.10572 6.16639C5.39862 6.45929 5.87349 6.45929 6.16638 6.16639C6.45928 5.8735 6.45928 5.39862 6.16638 5.10573L5.45928 4.39862Z"
        fill="currentColor"
      />
      <path
        d="M22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12Z"
        fill="currentColor"
      />
      <path
        d="M19.6014 5.45928C19.8943 5.16638 19.8943 4.69151 19.6014 4.39862C19.3085 4.10572 18.8336 4.10572 18.5407 4.39862L17.8336 5.10572C17.5407 5.39862 17.5407 5.87349 17.8336 6.16638C18.1265 6.45928 18.6014 6.45928 18.8943 6.16638L19.6014 5.45928Z"
        fill="currentColor"
      />
      <path
        d="M12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z"
        fill="currentColor"
      />
      <path
        d="M18.8943 17.8336C18.6014 17.5407 18.1266 17.5407 17.8337 17.8336C17.5408 18.1265 17.5408 18.6014 17.8337 18.8943L18.5408 19.6014C18.8337 19.8943 19.3085 19.8943 19.6014 19.6014C19.8943 19.3085 19.8943 18.8336 19.6014 18.5407L18.8943 17.8336Z"
        fill="currentColor"
      />
      <path
        d="M3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12Z"
        fill="currentColor"
      />
      <path
        d="M6.16632 18.8943C6.45921 18.6014 6.45921 18.1265 6.16632 17.8336C5.87342 17.5407 5.39855 17.5407 5.10566 17.8336L4.39855 18.5407C4.10566 18.8336 4.10566 19.3085 4.39855 19.6014C4.69144 19.8943 5.16632 19.8943 5.45921 19.6014L6.16632 18.8943Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0303 7.96967C18.3232 8.26256 18.3232 8.73744 18.0303 9.03033L11.0303 16.0303C10.7374 16.3232 10.2626 16.3232 9.96967 16.0303L5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697C6.26256 10.6768 6.73744 10.6768 7.03033 10.9697L10.5 14.4393L16.9697 7.96967C17.2626 7.67678 17.7374 7.67678 18.0303 7.96967Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconSearch({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3851 15.4458C11.7348 17.5685 7.85538 17.4014 5.3986 14.9446C2.76256 12.3086 2.76256 8.0347 5.3986 5.39866C8.03464 2.76262 12.3085 2.76262 14.9445 5.39866C17.4013 7.85544 17.5684 11.7349 15.4457 14.3851L20.6014 19.5408C20.8943 19.8337 20.8943 20.3085 20.6014 20.6014C20.3085 20.8943 19.8336 20.8943 19.5407 20.6014L14.3851 15.4458ZM6.45926 13.8839C4.40901 11.8337 4.40901 8.50957 6.45926 6.45932C8.50951 4.40907 11.8336 4.40907 13.8839 6.45932C15.9326 8.50807 15.9341 11.8288 13.8884 13.8794C13.8869 13.8809 13.8854 13.8824 13.8839 13.8839C13.8824 13.8854 13.8809 13.8869 13.8794 13.8884C11.8288 15.9342 8.50801 15.9327 6.45926 13.8839Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconAtSign({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.75464 12C4.75464 7.99594 8.00057 4.75 12.0046 4.75C16.0087 4.75 19.2546 7.99594 19.2546 12C19.2546 12.0337 19.2569 12.0668 19.2612 12.0993C19.2579 12.1307 19.2567 12.1626 19.2574 12.1949C19.2636 12.4495 19.231 12.8444 19.1474 13.2219C19.0563 13.6331 18.9376 13.8694 18.8682 13.9423C18.5663 14.2591 18.1509 14.4429 17.7135 14.4535C17.276 14.464 16.8522 14.3003 16.5354 13.9984C16.3283 13.801 16.2689 13.5113 16.2527 12.8381L16.1372 8.04002C16.1273 7.62592 15.7835 7.29831 15.3694 7.30828C14.9553 7.31825 14.6277 7.66201 14.6377 8.07611L14.6543 8.76875C13.9332 8.17672 13.0104 7.82135 12.0046 7.82135C9.69686 7.82135 7.82605 9.69216 7.82605 11.9999C7.82605 14.3077 9.69686 16.1785 12.0046 16.1785C13.279 16.1785 14.4202 15.608 15.1866 14.7084C15.2726 14.8392 15.376 14.9655 15.5006 15.0843C16.1054 15.6606 16.9144 15.9731 17.7495 15.953C18.5847 15.9329 19.3777 15.5819 19.9541 14.9771C20.3238 14.5892 20.5109 14.0022 20.6119 13.5463C20.7203 13.0566 20.7662 12.5406 20.757 12.1588C20.7563 12.1313 20.7542 12.1042 20.7507 12.0775C20.7533 12.052 20.7546 12.0262 20.7546 12C20.7546 7.16751 16.8371 3.25 12.0046 3.25C7.17215 3.25 3.25464 7.16751 3.25464 12C3.25464 16.8325 7.17215 20.75 12.0046 20.75C14.0477 20.75 15.929 20.0489 17.4183 18.8747C17.7435 18.6182 17.7993 18.1466 17.5428 17.8213C17.2864 17.4961 16.8148 17.4403 16.4895 17.6968C15.2554 18.6698 13.6988 19.25 12.0046 19.25C8.00057 19.25 4.75464 16.0041 4.75464 12ZM12.0046 9.32135C10.5253 9.32135 9.32605 10.5206 9.32605 11.9999C9.32605 13.4793 10.5253 14.6785 12.0046 14.6785C13.484 14.6785 14.6832 13.4793 14.6832 11.9999C14.6832 10.5206 13.484 9.32135 12.0046 9.32135Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconLoading({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-5 h-5 animate-spin", className)}
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );
}

export function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.392 18.2102L11.3693 17.1989L14.9205 13.6477H6V12.1705H14.9205L11.3693 8.625L12.392 7.60795L17.6932 12.9091L12.392 18.2102Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconHeartOutline({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 10.0298C3.25 7.3293 5.61914 5.25 8.4 5.25C9.83347 5.25 11.0948 5.92214 12 6.79183C12.9052 5.92214 14.1665 5.25 15.6 5.25C18.3809 5.25 20.75 7.3293 20.75 10.0298C20.75 11.8797 19.9611 13.5064 18.8682 14.8815C17.7771 16.2543 16.35 17.4193 14.9835 18.366C14.4615 18.7276 13.9335 19.0611 13.4503 19.3072C12.9965 19.5383 12.4747 19.75 12 19.75C11.5253 19.75 11.0035 19.5383 10.5497 19.3072C10.0665 19.0611 9.53846 18.7276 9.01653 18.366C7.65005 17.4193 6.22287 16.2543 5.13182 14.8815C4.03888 13.5064 3.25 11.8797 3.25 10.0298ZM8.4 6.75C6.32075 6.75 4.75 8.2791 4.75 10.0298C4.75 11.4333 5.34579 12.74 6.30609 13.9482C7.26828 15.1588 8.56292 16.2269 9.87074 17.133C10.3656 17.4758 10.8317 17.7675 11.2305 17.9706C11.6586 18.1886 11.9067 18.25 12 18.25C12.0933 18.25 12.3414 18.1886 12.7695 17.9706C13.1683 17.7675 13.6344 17.4758 14.1293 17.133C15.4371 16.2269 16.7317 15.1588 17.6939 13.9482C18.6542 12.74 19.25 11.4333 19.25 10.0298C19.25 8.2791 17.6792 6.75 15.6 6.75C14.4058 6.75 13.2908 7.46342 12.5946 8.36892C12.4526 8.55356 12.2329 8.66176 12 8.66176C11.7671 8.66176 11.5474 8.55356 11.4054 8.36892C10.7092 7.46342 9.59415 6.75 8.4 6.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconHeart({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.4 5.25C5.61914 5.25 3.25 7.3293 3.25 10.0298C3.25 11.8927 4.12235 13.4612 5.27849 14.7604C6.43066 16.0552 7.91714 17.142 9.26097 18.0516L11.5796 19.6211C11.8335 19.793 12.1665 19.793 12.4204 19.6211L14.739 18.0516C16.0829 17.142 17.5693 16.0552 18.7215 14.7604C19.8777 13.4612 20.75 11.8927 20.75 10.0298C20.75 7.3293 18.3809 5.25 15.6 5.25C14.1665 5.25 12.9052 5.92214 12 6.79183C11.0948 5.92214 9.83347 5.25 8.4 5.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconStar({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.8649 2.99628C12.4796 2.33213 11.5204 2.33213 11.1351 2.99628L8.42101 7.67359C8.23064 8.00168 7.90159 8.22557 7.52653 8.28222L2.44021 9.05044C1.58593 9.17947 1.28627 10.2581 1.95158 10.8093L5.74067 13.9485C6.09141 14.2391 6.25633 14.6975 6.17113 15.1449L5.17996 20.35C5.02327 21.1729 5.88706 21.8122 6.62821 21.4219L11.4176 18.9001C11.7821 18.7082 12.2178 18.7082 12.5824 18.9001L17.3718 21.4219C18.1129 21.8122 18.9767 21.1729 18.82 20.35L17.8289 15.1449C17.7437 14.6975 17.9086 14.2391 18.2593 13.9485L22.0484 10.8093C22.7137 10.2581 22.4141 9.17947 21.5598 9.05044L16.4735 8.28222C16.0984 8.22557 15.7694 8.00168 15.579 7.67359L12.8649 2.99628Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconInfo({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM12 10.75C12.4142 10.75 12.75 11.0858 12.75 11.5V16.5C12.75 16.9142 12.4142 17.25 12 17.25C11.5858 17.25 11.25 16.9142 11.25 16.5V11.5C11.25 11.0858 11.5858 10.75 12 10.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconArc({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.9496 17.6715L18.8289 15.3159C19.0742 15.103 19.3115 14.8806 19.5399 14.6492C21.139 13.0294 22.3054 10.9712 22.76 8.70191C22.7759 8.62254 22.7875 8.54332 22.7951 8.46448C22.9091 7.28189 22.1132 6.18491 20.9282 5.95041C20.7771 5.92026 20.6231 5.90487 20.4691 5.90487C20.4691 5.90487 20.4691 5.90487 20.4691 5.90487C19.3581 5.90487 18.3931 6.69601 18.1756 7.78474C17.9511 8.90658 17.4254 9.95153 16.7009 10.8395L16.7 10.8376L16.6998 10.8378L16.6997 10.8376L13.6071 4.33406C13.5587 4.23244 13.5035 4.1354 13.4422 4.04336C13.0131 3.39912 12.2841 3.00056 11.4961 3C11.4398 3 11.3837 3.00203 11.3281 3.00603C10.4937 3.06609 9.74908 3.57042 9.38515 4.33406L6.23155 10.9659C7.06165 12.0632 8.48953 12.9774 9.94683 13.3595C10.044 13.385 10.1413 13.4081 10.2385 13.4288L11.2466 11.312L11.2587 11.2866C11.2707 11.2613 11.2858 11.2392 11.3031 11.2203C11.4241 11.0877 11.6557 11.1098 11.7399 11.2866L12.7374 13.3833L12.7348 13.3839L14.7655 17.6554L14.768 17.6546L14.7684 17.6554L15.7661 19.7527C16.1527 20.5673 16.9782 21.0884 17.8803 21.0868C18.0888 21.0868 18.2974 21.0579 18.5027 21.0002C18.6787 20.9517 18.8432 20.884 18.995 20.8C20.0576 20.212 20.4998 18.8275 19.9496 17.6715ZM16.6997 10.8376L16.6965 10.8408C16.6965 10.8408 16.6965 10.8406 16.6966 10.8403C16.6967 10.8394 16.6973 10.8376 16.6997 10.8376ZM10.2351 13.4288L10.2352 13.4287C10.2319 13.428 10.2287 13.4273 10.2255 13.4266C9.40709 13.2515 8.58642 12.9019 7.86385 12.4393C7.85983 12.4367 7.85581 12.4341 7.85179 12.4316C7.20853 12.018 6.64372 11.5149 6.22847 10.966C6.2008 10.9295 6.17379 10.8928 6.14744 10.856C5.96305 10.5979 5.81181 10.3306 5.70234 10.0584C5.21791 8.86227 3.85445 8.28503 2.65781 8.76606C1.46117 9.2503 0.883707 10.6132 1.36493 11.8094C1.39921 11.8944 1.43514 11.9789 1.47266 12.063C2.03554 13.3241 2.95823 14.4805 4.09801 15.4426L4.09799 15.4426L4.1069 15.4501L4.09804 15.4427L3.03294 17.6811C2.49077 18.8195 2.8982 20.2209 4.01463 20.8142C5.19844 21.4428 6.65493 20.9521 7.22598 19.756L8.19763 17.7141C9.22665 18.0439 10.2941 18.2264 11.3455 18.2264C12.5132 18.2264 13.6649 18.0243 14.7621 17.6555L12.7346 13.384C12.6776 13.3976 12.6205 13.4104 12.5633 13.4224C12.1627 13.5065 11.7557 13.5507 11.3487 13.5507C11.3034 13.5507 11.2578 13.5501 11.2121 13.5488C10.8923 13.5397 10.5639 13.499 10.2354 13.4289L10.2351 13.4288Z"
        fill="currentColor"
      />
    </svg>
  );
}
