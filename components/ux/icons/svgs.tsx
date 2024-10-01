import { cn } from '@/lib/utils';

type svgProps = React.SVGProps<SVGSVGElement>;

const TikTok: React.FC<svgProps> = ({ className }) => {
  return (
    <svg height='32' width='32' viewBox='0 0 32 32' className={cn(className)}>
      <g fill='currentColor'>
        <path d='M24.562,7.613c-1.508-.983-2.597-2.557-2.936-4.391-.073-.396-.114-.804-.114-1.221h-4.814l-.008,19.292c-.081,2.16-1.859,3.894-4.039,3.894-.677,0-1.315-.169-1.877-.465-1.288-.678-2.169-2.028-2.169-3.582,0-2.231,1.815-4.047,4.046-4.047,.417,0,.816,.069,1.194,.187v-4.914c-.391-.053-.788-.087-1.194-.087-4.886,0-8.86,3.975-8.86,8.86,0,2.998,1.498,5.65,3.783,7.254,1.439,1.01,3.19,1.606,5.078,1.606,4.886,0,8.86-3.975,8.86-8.86V11.357c1.888,1.355,4.201,2.154,6.697,2.154v-4.814c-1.345,0-2.597-.4-3.647-1.085Z' />
      </g>
    </svg>
  );
};
const Twitter: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      data-testid='geist-icon'
      height='16'
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 16 16'
      width='16'
      aria-label=''
      className={cn('size-4', className)}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z'
        fill='currentColor'
      ></path>
    </svg>
  );
};
const Instagram: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      data-testid='geist-icon'
      strokeLinecap='round'
      strokeLinejoin='round'
      height='32'
      width='32'
      viewBox='0 0 32 32'
      aria-label=''
      className={cn(className)}
    >
      <g fill={'currentColor'}>
        <path d='M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0' />
      </g>
    </svg>
  );
};

const Underline08: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      width='517'
      height='62'
      viewBox='0 0 517 62'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M238.104 8.99289C236.235 9.09919 234.367 9.21379 232.499 9.32009C207.738 10.3095 182.971 11.4951 158.179 12.9588C142.607 13.8746 131.764 14.5696 122.844 15.2074C82.5104 17.3579 42.2745 20.4651 2.31746 24.8479C1.58318 24.9297 1.21111 25.0767 1.1645 25.1013C0.108048 25.6001 0.0172869 26.4588 0.00175088 26.8758C-0.0186913 27.4645 0.127681 28.2412 1.09173 28.7563C1.20703 28.8135 1.4638 28.9526 1.90453 28.9853C2.08524 29.0016 4.27987 28.8464 8.43045 28.5275C8.20967 28.9854 8.19987 29.4269 8.28327 29.8275C8.36668 30.22 8.73221 31.3648 10.2711 31.4875C11.5172 31.5856 20.1504 30.3427 23.5029 30.0156C35.141 28.8872 46.7636 27.5871 58.4099 26.5404C76.6304 24.8969 94.864 23.4088 113.1 21.9615C125.532 20.9639 137.965 19.9908 150.404 19.0423C166.025 18.0611 181.652 17.1534 197.285 16.3357C242.2 15.1173 287.118 14.8393 331.78 15.0601C385.003 15.3299 438.504 14.8965 491.384 21.1845L488.751 21.2827L487.811 21.3155C464.801 19.2059 437.122 20.8412 417.629 20.6449C333.693 19.8109 251.091 22.5338 167.477 29.2224C134.659 31.8554 101.859 35.5269 69.2165 39.738C57.9267 41.2016 28.611 44.644 24.6198 45.9277C23.2567 46.3611 22.8896 47.3015 22.8103 47.6286C22.6909 48.1192 22.7424 48.5934 22.9755 49.0595C23.1267 49.3621 23.3835 49.7138 23.8855 49.9836C24.0769 50.0899 24.4236 50.2288 24.9657 50.3024C25.4613 50.3678 26.3427 50.4088 27.6657 50.4088C134.31 49.9755 240.549 37.3912 347.013 31.9945C386.303 29.9994 425.593 28.1105 464.891 26.2707C472.585 25.9109 480.288 25.6737 487.99 25.3957C489.609 25.5511 491.196 25.7227 492.758 25.919L475.063 26.8512C439.796 28.7074 404.627 31.3404 369.426 34.235C287.903 40.9318 206.752 52.0768 125.159 57.6616C124.034 57.7434 123.183 58.7164 123.26 59.8448C123.337 60.9732 124.314 61.8236 125.439 61.7418C207.05 56.157 288.222 45.0039 369.761 38.307C404.922 35.4206 440.05 32.7876 475.276 30.9315C487.802 30.2773 505.342 29.3532 508.686 29.1652C509.087 29.1406 509.316 29.1244 509.357 29.1162C510.321 29.0099 510.665 28.4374 510.714 28.372C511.213 27.7588 511.254 27.1292 511.098 26.5486C511 26.1888 510.747 25.4365 509.708 25.1258C509.43 25.0441 509.152 24.9623 508.866 24.8887C511.941 24.8396 514.508 24.7743 515.219 24.6108C516.724 24.2592 516.961 23.098 516.994 22.6728C517.026 22.223 516.937 21.7406 516.577 21.2664C516.43 21.0701 516.184 20.8084 515.743 20.5958C515.522 20.4977 515.023 20.3342 514.148 20.1952C486.003 15.7551 457.646 13.523 429.207 12.3619L446.845 12.5008C447.09 12.5008 447.204 12.4926 447.229 12.4926C448.267 12.4027 448.627 11.7648 448.709 11.6504C449.101 11.1025 449.175 10.5383 449.036 9.98226C449.028 9.94138 448.799 8.85381 447.703 8.51039L459.142 8.36326C461.465 8.33873 462.618 8.30615 462.822 8.28979C463.828 8.19167 464.188 7.60277 464.261 7.50465C464.744 6.89956 464.793 6.26993 464.613 5.65667C464.539 5.40319 464.286 4.48739 463.051 4.24209C462.986 4.22573 462.667 4.18499 462.111 4.17681C457.033 4.08686 420.384 4.16032 406.287 4.24209C383.646 4.37292 360.996 4.51204 338.354 4.96994C321.894 5.29701 305.45 5.81204 289.006 6.48254C242.729 5.37049 196.498 3.48169 150.818 0.00652763C149.693 -0.0834179 148.71 0.767016 148.624 1.88725C148.539 3.01565 149.383 3.99683 150.508 4.08677C179.529 6.28635 208.772 7.86449 238.104 8.99289ZM412.101 24.6842C330.177 24.0219 249.475 26.7612 167.803 33.3027C135.051 35.9193 102.317 39.5908 69.7398 43.7937C65.5434 44.3415 58.8139 45.151 51.8562 46.0178C150.306 44.0226 248.46 32.894 346.809 27.9061C368.567 26.8022 390.334 25.7309 412.101 24.6842Z'
        fill='currentColor'
      />
    </svg>
  );
};
const Lamp: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      width='400'
      height='400'
      viewBox='0 0 400 400'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <path
        d='M281.039 150.734C249.146 101.275 171.209 157.252 204.36 201.071'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M275.747 158.814C256.796 168.357 238.638 178.946 220.448 190.082C215.821 192.915 204.432 204.706 207.39 199.957C208.699 197.852 210.46 196.117 211.998 194.197'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M229.147 123.83C222.686 120.121 223.999 100.597 218.866 96.4894C215.126 93.4965 207.133 105.114 203.848 107.453C199.237 110.732 183.155 114.994 180.924 120.949C177.222 130.815 195.403 136.382 199.105 146.251'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M183.603 138.258C175.707 143.796 110.968 175.223 111.59 179.253C112.645 186.092 165.395 254.473 169.665 282.159'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M133.824 302.982C140.672 301.517 232.395 306.709 198.252 304.4'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M127.295 168.55C109.514 139.277 73.2003 176.133 99.88 196.481C118.607 210.767 140.488 188.891 128.081 169.371'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.503384'
        d='M213.893 246.753C213.224 244.626 214.585 242.186 214.931 239.9'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.503384'
        d='M256.679 234.19C253.824 231.901 252.911 229.13 251.383 226.195'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.503384'
        d='M285.277 209.064C288.455 211.92 289.842 213.565 291.632 214.775'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.503384'
        d='M295.867 177.088C300.666 177.532 306.709 179.551 309.635 180.514L295.867 177.088Z'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
const CampHouse: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      width='200'
      height='200'
      viewBox='0 0 400 400'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <path
        d='M36.2984 191.443C34.753 219.45 35.5365 242.287 34.1367 270.28'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M28.8789 205.35C34.3474 210.782 36.1422 208.068 41.24 203.65'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M27.3359 214.467C33.4987 221.349 36.4249 217.838 42.9421 214.004'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M24.7031 226.673C31.8719 229.618 37.2013 228.132 44.0171 225.746'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.1562 241.044C31.2578 243.108 38.8197 241.36 47.7329 236.408'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 250.159C31.5931 259.457 37.3143 252.697 48.3491 249.387'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M342.191 108.07C343.047 157.419 344.353 206.794 344.353 256.249'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M312.73 231.085C350.122 207.643 337.314 204.111 373.535 234.464'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M318.383 206.989C346.485 185.718 339.015 180.935 365.616 204.21'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M327.531 174.058C342.048 161.261 344.259 163.312 357.475 176.528'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M330.77 149.329C341.177 139.652 344.238 142.878 354.231 150.872'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M328.922 131.877C337.785 122.674 343.486 121.981 351.458 130.951'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M336.48 115.639C341.867 109.673 343.436 108.342 348.52 115.331'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M235.441 111.607C208.791 161.703 178.363 209.957 149.301 258.394'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M128.636 129.318C102.051 169.711 79.1344 212.427 52.4258 252.49'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M132.125 124.219C160.571 119.39 192.919 115.032 231.951 111.07'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M238.66 110.803C264.434 160.458 296.794 206.872 319.969 257.858'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M270.864 206.335C242.326 206.342 213.483 203.92 184.992 203.92'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M228.195 127.979C249.11 171.355 282.512 210.423 302.796 254.37'
        stroke='currentColor'
        strokeOpacity='0.5'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M198.141 180.842C218.453 181.701 238.297 186.307 258.788 184.599'
        stroke='currentColor'
        strokeOpacity='0.5'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M211.559 161.521C222.724 161.961 233.339 164.205 244.565 164.205'
        stroke='currentColor'
        strokeOpacity='0.5'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M186.332 218.145C213.981 220.108 241.644 220.56 269.52 220.56'
        stroke='currentColor'
        strokeOpacity='0.5'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M183.382 219.752C182.97 231.94 182.447 244.147 180.43 256.247'
        stroke='currentColor'
        strokeOpacity='0.5'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M268.984 222.168C269.291 232.916 268.984 243.601 268.984 254.37'
        stroke='currentColor'
        strokeOpacity='0.5'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M225.244 222.168C225.073 234.289 224.761 246.38 223.902 258.395'
        stroke='currentColor'
        strokeOpacity='0.5'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M226.048 130.393C226.199 153.901 226.707 177.537 225.242 200.968'
        stroke='currentColor'
        strokeOpacity='0.5'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M203.776 169.57C204.074 177.841 202.703 186.063 202.703 194.258'
        stroke='currentColor'
        strokeOpacity='0.5'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M247.783 171.986C247.72 181.046 247.005 190.065 246.441 199.089'
        stroke='currentColor'
        strokeOpacity='0.5'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M139.195 260.586C108.741 260.886 77.9932 261.676 47.6445 260.426'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M378.998 260.004C312.818 256.021 214.037 266.253 148.074 260.873'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M167.012 271.335C161.721 270.8 152.493 271.072 149.301 271.604'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M173.814 281.192C169.733 281.485 165.771 280.924 161.738 280.924'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M192.155 291.17C185.874 291.179 179.597 291.189 173.355 291.226'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M165.302 131.611C152.005 153.056 140.135 175.44 126.719 196.905'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M185.174 130.838C172.654 153.855 159.189 176.395 144.656 198.196'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M166.465 130.449C171.519 129.94 176.568 129.136 181.692 129.546'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M127.234 196.389C132.564 196.262 137.823 197.044 143.105 197.421'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M209.762 251.65C206.925 251.846 204.06 251.631 201.23 251.553'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M200.36 252.135C196.966 253.655 193.66 255.383 190.375 257.079'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M191.344 239.047C193.456 243.5 195.143 248.123 196.774 252.717'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M200.844 240.209C201.069 243.805 201.862 247.354 202.395 250.874'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M191.926 237.881C195.218 236.24 197.844 237.443 200.846 239.045'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M210.637 251.164C210.451 253.425 210.379 255.688 210.25 257.95'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M201.523 250.973C201.75 253.224 201.586 255.512 201.523 257.759'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M191.925 241.18C192.164 245.756 191.83 250.316 191.441 254.85'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
const PalmTrees: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      width='400'
      height='400'
      viewBox='0 0 400 400'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <path
        d='M182.009 198.597C166.556 195.586 155.432 204.101 146.352 216.478'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M158.242 182.141C170.084 183.468 179.125 188.303 185.976 197.989'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M185.973 200.629C197.045 203.314 204.729 210.328 209.744 219.118'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M185.973 196.667C201.217 188.301 218.478 191.319 234.836 195.821'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M155.188 212.516C153.423 214.314 156.133 216.92 156.603 219.119'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M168.999 203.271C168.131 204.937 168.999 209.833 168.999 209.874'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M180.862 205.109C180.92 206.572 180.619 208.009 180.508 209.356'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M170.123 186.102C167.915 187.61 165.422 189.687 163.52 191.385'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M156.837 183.803C156.111 185.546 155.176 186.888 154.359 188.404'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M217.668 194.025C220.341 195.877 222.18 198.382 224.271 200.628'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M203.145 194.025C206.116 194.926 207.856 197.28 209.748 199.308'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M201.383 216.383C201.114 217.529 200.2 218.269 199.613 219.214'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M195.745 205.109C195.587 206.572 195.038 207.94 194.684 209.356'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M250.684 146.484C260.175 140.631 273.286 139.582 283.7 143.636'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M282.379 145.179C295.653 137.509 309.489 138.353 321.998 146.482'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M285.02 145.162C300.95 150.777 307.136 166.682 310.112 182.14'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M254.645 128.079C270.421 119.851 281.259 131.472 285.019 146.482'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M303.213 164.973C304.423 171.165 301.759 173.202 298.227 176.859'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M295.597 154.406C296.395 157.859 294.171 160.596 292.766 163.65'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M308.168 141.199C310.656 142.664 310.931 144.68 312.061 146.482'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M271.818 127.994C268.641 129.088 268.191 132.104 266.535 134.597'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M275.433 142.521C273.151 144.393 272.184 146.879 270.832 149.124'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M255.969 146.564C255.969 147.388 255.969 148.212 255.969 149.041'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M279.734 83.653C293.978 82.3155 312.6 82.1488 316.712 97.6188'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M278.419 82.3419C266.015 76.2878 251.124 79.0689 242.762 88.3753'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M234.836 58.0091C252.244 57.6545 269.696 67.6986 279.738 81.7715'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M282.379 79.1306C291.938 67.0006 305.296 59.6989 319.357 68.4479'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M311.161 91.0156C312.561 93.7702 309.693 95.4975 308.684 97.6188'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M296.754 84.4121C297.343 86.5266 296.878 88.986 296.931 91.0153'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M266.533 79.1309C263.147 81.4385 262.608 84.6928 261.25 88.3754'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M252.356 85.7344C251.881 87.4736 251.881 89.2731 251.648 91.017'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M255.966 64.6035C252.994 65.7695 251.381 67.9992 249.363 69.8861'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M242.418 61.5432C239.924 61.0255 239.285 63.952 237.816 65.0825'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M313.284 68.0352C312.931 68.3891 312.577 68.7431 312.223 69.097'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M121.258 116.108C137.478 103.314 162.396 97.5858 176.725 115.83'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M115.977 118.75C105.195 123.592 92.3122 139.807 99.6381 151.766'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M102.773 130.635C103.015 136.258 105.457 138.911 109.377 142.521'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M115.355 121.391C115.929 123.553 116.193 125.817 116.594 127.994'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M137.109 106.863C143.713 107.891 144.299 111.397 146.354 116.107'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M154.281 105.543C161.964 107.63 162.727 111.921 163.526 114.788'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M148.992 83.3672C130.242 80.5875 116.357 99.3721 118.923 116.107'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M130.504 88.375C134.433 88.5557 136.915 90.9885 139.748 93.6575'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M123.902 99.6481C125.495 98.2694 127.462 98.692 129.185 98.2324'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M115.978 109.506C109.288 92.5747 89.7659 91.9944 79 99.8548'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M97.4906 97.6191C93.1529 99.2558 90.8935 103.314 88.2461 106.864'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M108.056 100.262C104.935 100.546 104.35 104.505 102.773 106.865'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M121.258 116.107C200.383 144.023 243.946 255.147 239.851 336.654'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M279.734 91.0156C237.564 160.759 218.984 255.055 218.984 336.655'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M182.008 205.912C198.306 248.262 193.104 294.667 193.104 339.297'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M285.021 149.123C256.29 207.557 263.444 273.6 268.808 336.654'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M315.395 340.617C252.2 341.672 187.587 341.5 123.902 341.938'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M299.805 67.9395C301.437 68.6316 301.257 70.5966 301.928 71.8327'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
const SummerHut: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      width='400'
      height='400'
      viewBox='0 0 400 400'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <path
        d='M112.988 157.966C141.017 101.338 226.552 102.735 263.252 150.835C264.409 152.357 266.953 155.892 265.564 158.688C263.425 163.006 148.286 163.395 110.477 163.395'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M190.574 119.809C194.762 173.486 189.282 234.1 194.108 284.724'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M151.703 217.1C178.463 218.564 205.169 215.471 231.805 214.143'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.503384'
        d='M185.865 117.453C168.416 122.297 155.849 150.761 155.238 152.792'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.503384'
        d='M195.289 123.344C210.739 127.158 229.67 143.539 230.628 159.861'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M65.7109 243.667C67.1185 168.886 109.296 210.568 109.296 250.564'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M61 284.724C69.7257 232.972 55.7538 251.393 91.4203 251.393C127.359 251.393 120.454 250.635 124.61 284.377'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M101.441 258.809C101.771 265.496 102.176 272.183 103.019 278.835'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M78.5524 251.74C76.9456 259.456 79.3015 282.924 79.344 283.545'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M294.238 227.706C311.526 170.669 349.137 193.208 334.52 242.318'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M337.914 280.011C337.538 272.288 341.844 252.099 335.53 246.222C328.725 239.895 274.479 241.818 266.622 247.964C258.765 254.11 264.372 270.298 264.372 280.011'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M280.098 252.92C280.812 261.126 281.78 269.46 280.985 277.658'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M319.962 249.385C318.27 259.632 318.237 279.491 317.988 285.902'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M168.195 285.902C209.607 256.556 180.716 266.209 215.314 282.964'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
const SleepUnderTree: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      width='400'
      height='400'
      viewBox='0 0 400 400'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <path
        d='M138.051 150.752C169.028 162.01 146.05 212.823 114.831 200.196C86.9185 188.907 86.0826 121.558 150.948 144.407'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M194.279 254C162.948 250 156.403 206.848 158.3 207C189.781 217.222 220.665 213.416 223.062 213C227.126 212.295 305.302 194.893 331 171'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M303 217C302.097 215.22 300.732 213.987 298.881 212.555C298.175 212.007 297.39 211.489 296.634 210.974C294.648 209.625 259.825 188.014 255.71 185.791C253.724 184.707 251.692 184 249 184C248.963 184.027 248.925 184.055 248.888 184.078C248.908 184.055 248.925 184.027 248.945 184C248.914 184.039 221.549 208.314 221 210'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.503384'
        d='M26 152.9C26.3155 153.104 26.6261 153.317 26.9317 153.541C28.5995 157.446 120.091 218.784 206.978 216.96C291.383 215.188 364.921 156.553 374 147'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
const SadFace: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      width='67'
      height='37'
      viewBox='0 0 67 37'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <g clipPath='url(#clip0_102_6)'>
        <mask
          id='mask0_102_6'
          // style='mask-type:luminance'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='67'
          height='37'
        >
          <path d='M66.7 0H0V36.92H66.7V0Z' fill='white' />
        </mask>
        <g mask='url(#mask0_102_6)'>
          <path
            d='M18.3401 1.38002L18.1101 8.63002C18.1001 8.98002 18.1901 9.18002 18.5201 9.35002C18.8901 9.54002 19.4501 9.55002 19.8401 9.49002C20.3601 9.41002 20.9101 9.27001 21.3601 8.98001C21.6301 8.80001 22.1101 8.49002 22.1201 8.14002L22.3301 0.890017C22.3301 0.540017 22.2501 0.350017 21.9201 0.180017C21.5501 -0.00998299 21.0001 -0.019983 20.6101 0.040017C20.0901 0.120017 19.5501 0.260017 19.1001 0.550017C18.8301 0.720017 18.3601 1.03002 18.3501 1.39002L18.3401 1.38002Z'
            fill='currentColor'
          />
          <path
            d='M29.18 1.81001C29.04 4.20002 29.05 6.60001 29.21 8.98001C29.23 9.29001 29.74 9.46002 29.96 9.51002C30.41 9.61002 30.97 9.55002 31.4 9.43002C32.08 9.23002 33.13 8.80002 33.07 7.95002C32.98 6.69002 32.94 5.43001 32.94 4.16001V4.44002C32.94 3.40002 32.98 2.37002 33.04 1.33002C33.09 0.490017 32 0.410017 31.37 0.500017C30.87 0.570017 30.34 0.710017 29.91 1.00002C29.65 1.17002 29.2 1.46002 29.18 1.82002V1.81001Z'
            fill='currentColor'
          />
          <path
            d='M2.71024 34.22C17.8402 26.87 35.5902 22.45 51.7202 29.39C55.9002 31.19 59.4502 33.7 62.8802 36.65C63.8302 37.47 67.5802 36.27 66.5102 35.12C60.8202 29.01 52.1002 25.61 44.0102 24.3C34.7902 22.81 25.3302 23.93 16.4302 26.59C11.1802 28.16 6.10024 30.23 1.18024 32.62C0.660241 32.87 -0.38976 33.47 0.15024 34.17C0.64024 34.81 2.15024 34.48 2.71024 34.21V34.22Z'
            fill='currentColor'
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_102_6'>
          <rect width='67' height='37' fill='currentColor' />
        </clipPath>
      </defs>
    </svg>
  );
};
const Smile: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      width='100'
      height='100'
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M94.6785 31.4698C75.9099 66.3698 38.4175 80.5585 3.59528 60.9107C2.43603 60.2565 0.965988 60.6655 0.311743 61.8104C-0.342503 62.9758 0.0664445 64.4478 1.22569 65.1021C38.5504 86.181 78.8049 71.1539 98.9229 33.7597C99.5526 32.5943 99.1131 31.1221 97.9416 30.4883C96.7701 29.8749 95.3082 30.3045 94.6785 31.4698Z'
        fill='currentColor'
      />
      <path
        d='M32.8988 45.9428C36.7758 45.9428 39.9187 42.7999 39.9187 38.9229C39.9187 35.0459 36.7758 31.9031 32.8988 31.9031C29.0218 31.9031 25.8789 35.0459 25.8789 38.9229C25.8789 42.7999 29.0218 45.9428 32.8988 45.9428Z'
        fill='currentColor'
      />
      <path
        d='M61.9608 38.4754C65.762 38.4754 68.8436 35.394 68.8436 31.5927C68.8436 27.7915 65.762 24.7101 61.9608 24.7101C58.1596 24.7101 55.0781 27.7915 55.0781 31.5927C55.0781 35.394 58.1596 38.4754 61.9608 38.4754Z'
        fill='currentColor'
      />
    </svg>
  );
};
const Highlight05: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      width='68'
      height='74'
      viewBox='0 0 68 74'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.4259 68.5278C16.0259 66.7318 9.32534 65.8258 2.82534 64.9958C1.42534 64.8218 0.125535 65.7928 0.0255346 67.1608C-0.174465 68.5298 0.826121 69.7818 2.12612 69.9557C8.42612 70.7548 14.9255 71.6097 21.0255 73.3387C22.3255 73.7137 23.7261 72.9418 24.1261 71.6138C24.5261 70.2868 23.7259 68.9038 22.4259 68.5278Z'
        fill='black'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M41.8251 43.0648C31.5251 32.5538 19.9251 23.3958 9.8251 12.6028C8.9251 11.5948 7.3251 11.5408 6.3251 12.4818C5.3251 13.4238 5.22549 15.0078 6.22549 16.0158C16.3255 26.8398 27.9255 36.0278 38.2255 46.5698C39.2255 47.5538 40.8251 47.5678 41.8251 46.5998C42.7251 45.6328 42.8251 44.0488 41.8251 43.0648Z'
        fill='black'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M61.1264 2.63576C61.4264 8.65176 61.7259 14.6678 62.0259 20.6848C62.0259 22.0628 63.2264 23.1268 64.6264 23.0598C66.0264 22.9918 67.0259 21.8188 67.0259 20.4398C66.7259 14.4138 66.4264 8.38876 66.1264 2.36376C66.0264 0.985757 64.8262 -0.0712432 63.4262 0.00375683C62.1262 0.0787568 61.0264 1.25876 61.1264 2.63576Z'
        fill='black'
      />
    </svg>
  );
};
const Arrow09: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      width='130'
      height='130'
      viewBox='0 0 130 130'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <g clip-path='url(#clip0_304_197)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10.8316 117.29C14.2448 102.664 19.1745 96.2087 25.1475 94.0207C31.1206 91.828 37.8521 93.9046 44.5836 95.986C49.2292 97.4502 53.9697 98.944 58.331 99.213C62.8819 99.4961 67.1485 98.4536 70.8461 94.7824C71.6994 93.9011 72.458 92.4712 72.9321 90.5652C73.6905 87.9791 74.1646 84.4596 74.3542 80.33C75.3023 64.6645 73.4065 40.0076 75.6819 24.9913C76.156 21.5393 76.9139 18.612 77.9568 16.4584C78.9049 14.5843 80.0424 13.3179 81.5594 12.9957C82.7919 12.7327 84.2143 13.1011 86.0156 14.1009C89.0496 15.808 92.6521 19.2896 97.203 24.9367C101.185 29.8802 104.504 35.4491 108.391 40.5063C114.459 48.4232 120.811 56.4467 127.922 62.7986C128.396 63.2002 129.059 63.16 129.438 62.7098C129.912 62.2585 129.818 61.5666 129.344 61.1651C122.328 54.9031 116.071 46.9839 110.098 39.1784C106.305 34.1081 102.892 28.525 98.9103 23.5685C94.1698 17.6252 90.2826 13.9967 87.0591 12.1996C84.7837 10.8646 82.7919 10.5021 81.0853 10.8539C79.3788 11.2164 77.8622 12.3406 76.7245 14.1436C75.2075 16.5294 74.1642 20.1828 73.5006 24.6678C71.2251 39.7375 73.1219 64.4832 72.1738 80.2044C71.9842 84.1445 71.5097 87.5053 70.8461 89.9729C70.4668 91.4359 69.9926 92.5636 69.2341 93.2401C66.1054 96.4125 62.4084 97.2725 58.4264 97.0285C54.2547 96.7691 49.7038 95.306 45.153 93.8963C38.0422 91.6657 30.7415 89.6175 24.3893 91.9666C18.037 94.3192 12.3484 101.07 8.74563 116.795C8.55601 117.384 8.93506 117.973 9.50392 118.109C10.0728 118.245 10.7368 117.879 10.8316 117.29Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.68015 116.438C7.58534 116.285 7.39535 115.87 7.30054 115.526C6.73168 113.856 6.16338 111.264 5.97376 110.503C3.88794 103.776 2.18137 96.2451 2.18137 89.039C2.18137 88.4348 1.70676 87.9456 1.1379 87.9468C0.474234 87.948 0 88.4384 0 89.0425C0 96.4571 1.80139 104.207 3.79239 111.13C4.07682 111.901 4.64568 114.532 5.21454 116.229C5.40416 116.839 5.59434 117.343 5.78395 117.661C5.97357 117.921 6.16282 118.1 6.35244 118.213C6.73168 118.504 7.3011 118.646 7.86996 118.627C8.53362 118.606 9.29192 118.387 10.0504 118.015C11.6622 117.288 13.5582 115.957 15.0751 114.905C15.9284 114.301 16.6871 113.786 17.1611 113.628C21.238 112.277 25.6936 113.717 29.1068 118.394C29.486 118.88 30.1503 118.985 30.6243 118.627C31.0984 118.27 31.193 117.584 30.9086 117.097C26.7369 111.488 21.4274 109.928 16.4973 111.55C15.2648 111.941 12.6104 114.1 10.2402 115.479C9.48172 115.873 8.8175 116.198 8.24864 116.357C8.05902 116.403 7.96421 116.435 7.77459 116.439C7.77459 116.442 7.68015 116.445 7.68015 116.438Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_304_197'>
          <rect width='130' height='130' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

const Arrow11: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      width='130'
      height='130'
      viewBox='0 0 130 130'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <g clip-path='url(#clip0_910_13)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M60.3434 54.1264C60.4519 54.6896 60.6689 55.2516 60.8859 55.8126C61.8625 58.8411 62.9478 62.373 64.9009 64.9804C67.5051 68.3995 70.4345 69.7211 73.3642 69.6918C77.4875 69.6473 81.7189 66.6058 84.323 62.4381C86.9272 58.3083 88.0127 53.1369 86.3851 48.9713C85.3 46.1164 82.9129 43.6804 78.7896 42.3523C74.1238 40.8202 69.675 42.0734 65.7687 44.7742C64.2496 45.7876 62.9478 47.0073 61.6457 48.3506C61.3201 46.583 60.9942 44.7981 60.6687 42.9882C59.8006 37.0626 59.5834 30.8343 59.9089 24.861C60.2344 16.9595 61.8627 9.40082 64.9009 2.09829C65.1179 1.42337 64.7922 0.650805 64.1411 0.373026C63.4901 0.0963326 62.731 0.417541 62.4054 1.09246C59.2587 8.68253 57.5218 16.5384 57.1962 24.7503C56.9792 30.8972 57.0886 37.3056 58.0651 43.4037C58.4992 45.9298 58.933 48.4092 59.4755 50.8604C56.9799 54.0765 55.0265 57.6496 53.8329 60.6878C46.2374 81.0123 56.1112 108.381 65.8768 126.798C66.2023 127.443 66.9625 127.688 67.6136 127.347C68.2646 127.005 68.4816 126.206 68.1561 125.561C58.716 107.735 48.9499 81.2923 56.3284 61.621C57.1964 59.3076 58.6073 56.6525 60.3434 54.1264ZM62.4054 51.4962C62.6224 52.6572 62.9473 53.8107 63.3814 54.9608C64.3579 57.7365 65.2258 60.9982 66.9619 63.3864C68.915 65.9678 71.086 67.0713 73.2561 67.0496C76.7284 67.0138 79.9832 64.3988 82.0448 61.0275C84.2149 57.6193 85.3002 53.3723 83.8896 49.9337C83.0216 47.7202 81.1765 45.894 78.0298 44.8643C74.1236 43.6023 70.435 44.7221 67.2883 46.9476C65.4436 48.1856 63.816 49.7634 62.4054 51.4962Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M67.1772 126.999C66.6346 126.616 66.0921 126.043 65.5496 125.469C64.4645 124.366 63.4877 123.196 62.6196 122.58C57.4113 118.784 51.1181 114.297 44.9332 112.307C44.2821 112.083 43.5226 112.464 43.3056 113.158C43.0886 113.852 43.4139 114.597 44.1734 114.822C50.0328 116.731 56.0013 121.077 61.1012 124.72C61.9692 125.386 63.1622 126.796 64.2473 127.927C65.2238 128.886 66.2006 129.651 67.1772 129.929C67.7197 130.124 68.6963 129.907 69.3473 128.686C70.2154 126.954 70.9755 122.145 71.0841 121.679C72.1691 116.964 73.254 112.814 77.3773 109.837C77.9198 109.408 78.0281 108.58 77.7026 107.991C77.2685 107.402 76.4003 107.272 75.8577 107.701C71.1919 111.095 69.673 115.743 68.4795 121.118C68.4795 121.461 68.0454 124.335 67.3944 126.333C67.2859 126.549 67.2857 126.787 67.1772 126.999Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_910_13'>
          <rect
            width='130'
            height='130'
            fill='currentColor'
            transform='translate(130 130) rotate(-180)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const Bag: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      width='400'
      height='400'
      viewBox='0 0 400 400'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <path
        fill-rule='evenodd'
        clipRule='evenodd'
        d='M139.874 150.625C120.135 154.731 117.554 171.984 116.454 181.077C114.307 198.815 112.22 248.87 116.454 257.213C120.687 265.555 137.893 271.543 162.909 271.543C187.925 271.543 237.873 274.823 253.392 271.543C268.912 268.263 285.482 161.781 268.223 154.481C247.292 148.344 159.613 146.518 139.874 150.625Z'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M276.583 162.824C282.76 203.384 285.849 228.439 285.849 237.988C285.849 252.311 284.075 268.914 274.297 270.924C270.248 271.756 262.348 271.756 250.598 270.924'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M228.346 140.211C229.491 131.008 226.127 126.407 218.253 126.407C206.443 126.407 194.481 124.225 190.592 129.966C187.999 133.793 186.703 138.807 186.703 145.007'
        stroke='currentColor'
        strokeOpacity='0.9'
        strokeWidth='12'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
const Facebook: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      height='32'
      width='32'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <g fill='currentColor'>
        <path d='M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z' />
      </g>
    </svg>
  );
};
const Github: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      height='32'
      width='32'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <g fill='currentColor'>
        <path d='M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z' />
      </g>
    </svg>
  );
};
const Youtube: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      height='32'
      width='32'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <g fill='currentColor'>
        <path d='M31.331,8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673,0,0-10.007,0-12.502,.673-1.377,.37-2.461,1.462-2.829,2.848-.669,2.512-.669,7.752-.669,7.752,0,0,0,5.241,.669,7.752,.368,1.386,1.452,2.477,2.829,2.847,2.496,.673,12.502,.673,12.502,.673,0,0,10.007,0,12.502-.673,1.377-.37,2.461-1.462,2.829-2.847,.669-2.512,.669-7.752,.669-7.752,0,0,0-5.24-.669-7.752ZM12.727,20.758V11.242l8.364,4.758-8.364,4.758Z' />
      </g>
    </svg>
  );
};
const Linkedin: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      height='32'
      width='32'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <g fill='currentColor'>
        <path
          d='M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z'
          fillRule='evenodd'
        />
      </g>
    </svg>
  );
};
const Snapchat: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      height='32'
      width='32'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <g fill='currentColor'>
        <path d='M30.893,22.837c-.208-.567-.606-.871-1.058-1.122-.085-.05-.163-.09-.23-.12-.135-.07-.273-.137-.41-.208-1.41-.747-2.51-1.69-3.274-2.808-.217-.315-.405-.648-.562-.996-.065-.186-.062-.292-.015-.389,.046-.074,.108-.138,.18-.188,.242-.16,.492-.323,.661-.432,.302-.195,.541-.35,.695-.46,.579-.405,.983-.835,1.236-1.315,.357-.672,.404-1.466,.13-2.175-.383-1.009-1.336-1.635-2.49-1.635-.243,0-.486,.025-.724,.077-.064,.014-.127,.028-.189,.044,.011-.69-.005-1.418-.066-2.135-.218-2.519-1.1-3.84-2.02-4.893-.589-.66-1.283-1.218-2.053-1.653-1.396-.797-2.979-1.202-4.704-1.202s-3.301,.405-4.698,1.202c-.773,.434-1.468,.994-2.057,1.656-.92,1.053-1.802,2.376-2.02,4.893-.061,.717-.077,1.449-.067,2.135-.062-.016-.125-.031-.189-.044-.238-.051-.481-.077-.724-.077-1.155,0-2.109,.626-2.491,1.635-.276,.71-.23,1.505,.126,2.178,.254,.481,.658,.911,1.237,1.315,.153,.107,.393,.262,.695,.46,.163,.106,.402,.261,.635,.415,.082,.053,.151,.123,.204,.205,.049,.1,.051,.208-.022,.408-.155,.341-.34,.668-.553,.976-.747,1.092-1.815,2.018-3.179,2.759-.723,.383-1.474,.639-1.791,1.502-.239,.651-.083,1.391,.525,2.015h0c.223,.233,.482,.429,.766,.58,.592,.326,1.222,.578,1.876,.75,.135,.035,.263,.092,.379,.169,.222,.194,.19,.486,.485,.914,.148,.221,.336,.412,.555,.564,.619,.428,1.315,.455,2.053,.483,.666,.025,1.421,.054,2.283,.339,.357,.118,.728,.346,1.158,.613,1.032,.635,2.446,1.503,4.811,1.503s3.789-.873,4.829-1.51c.427-.262,.796-.488,1.143-.603,.862-.285,1.617-.313,2.283-.339,.737-.028,1.433-.055,2.053-.483,.259-.181,.475-.416,.632-.69,.212-.361,.207-.613,.406-.789,.109-.074,.229-.129,.356-.162,.662-.173,1.301-.428,1.901-.757,.302-.162,.575-.375,.805-.63l.008-.009c.57-.61,.714-1.329,.48-1.964Zm-2.102,1.13c-1.282,.708-2.135,.632-2.798,1.059-.563,.363-.23,1.144-.639,1.426-.503,.347-1.989-.025-3.909,.609-1.584,.524-2.594,2.029-5.442,2.029s-3.835-1.502-5.444-2.033c-1.916-.634-3.406-.262-3.909-.609-.409-.282-.077-1.064-.639-1.426-.664-.427-1.516-.351-2.798-1.055-.816-.451-.353-.73-.081-.862,4.645-2.249,5.386-5.721,5.419-5.979,.04-.312,.084-.557-.259-.875-.332-.307-1.804-1.218-2.213-1.503-.676-.472-.973-.944-.754-1.523,.153-.401,.527-.552,.92-.552,.124,0,.248,.014,.369,.041,.742,.161,1.462,.533,1.879,.633,.05,.013,.102,.02,.153,.021,.222,0,.3-.112,.285-.366-.048-.812-.162-2.394-.034-3.872,.176-2.034,.831-3.042,1.61-3.934,.374-.428,2.132-2.286,5.493-2.286s5.123,1.85,5.497,2.276c.78,.891,1.436,1.899,1.61,3.934,.128,1.479,.018,3.061-.034,3.872-.018,.268,.063,.366,.285,.366,.052,0,.103-.008,.153-.021,.417-.1,1.137-.472,1.879-.633,.121-.027,.245-.041,.369-.041,.395,0,.766,.153,.92,.552,.219,.579-.077,1.051-.753,1.523-.409,.285-1.881,1.196-2.213,1.503-.344,.317-.299,.563-.259,.875,.033,.261,.773,3.734,5.419,5.979,.274,.137,.737,.416-.079,.871Z' />
      </g>
    </svg>
  );
};
const Whatsapp: React.FC<svgProps> = ({ className }) => {
  return (
    <svg
      height='32'
      width='32'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <g fill='currentColor'>
        <path
          d='M25.873,6.069c-2.619-2.623-6.103-4.067-9.814-4.069C8.411,2,2.186,8.224,2.184,15.874c-.001,2.446,.638,4.833,1.852,6.936l-1.969,7.19,7.355-1.929c2.026,1.106,4.308,1.688,6.63,1.689h.006c7.647,0,13.872-6.224,13.874-13.874,.001-3.708-1.44-7.193-4.06-9.815h0Zm-9.814,21.347h-.005c-2.069,0-4.099-.557-5.87-1.607l-.421-.25-4.365,1.145,1.165-4.256-.274-.436c-1.154-1.836-1.764-3.958-1.763-6.137,.003-6.358,5.176-11.531,11.537-11.531,3.08,.001,5.975,1.202,8.153,3.382,2.177,2.179,3.376,5.077,3.374,8.158-.003,6.359-5.176,11.532-11.532,11.532h0Zm6.325-8.636c-.347-.174-2.051-1.012-2.369-1.128-.318-.116-.549-.174-.78,.174-.231,.347-.895,1.128-1.098,1.359-.202,.232-.405,.26-.751,.086-.347-.174-1.464-.54-2.788-1.72-1.03-.919-1.726-2.054-1.929-2.402-.202-.347-.021-.535,.152-.707,.156-.156,.347-.405,.52-.607,.174-.202,.231-.347,.347-.578,.116-.232,.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.281-.676-.567-.584-.78-.595-.202-.01-.433-.012-.665-.012s-.607,.086-.925,.434c-.318,.347-1.213,1.186-1.213,2.892s1.242,3.355,1.416,3.587c.174,.232,2.445,3.733,5.922,5.235,.827,.357,1.473,.571,1.977,.73,.83,.264,1.586,.227,2.183,.138,.666-.1,2.051-.839,2.34-1.649,.289-.81,.289-1.504,.202-1.649s-.318-.232-.665-.405h0Z'
          fillRule='evenodd'
        />
      </g>
    </svg>
  );
};

export {
  CampHouse,
  PalmTrees,
  SummerHut,
  SleepUnderTree,
  Underline08,
  Arrow11,
  Arrow09,
  Highlight05,
  Smile,
  SadFace,
  Lamp,
  Bag,
  Twitter,
  Instagram,
  TikTok,
  Facebook,
  Github,
  Linkedin,
  Snapchat,
  Whatsapp,
  Youtube,
};
