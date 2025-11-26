// // this is the badge template component where the users data are overlaid on the image

// import baseImage from '../assets/BASE IMAGE.png';
// interface BadgeTemplateProps {
//   userName: string
//   userImage: string | null
//   forDownload?: boolean
// }

// export function BadgeTemplate({
//   userName,
//   userImage,
//   forDownload = false,
// }: BadgeTemplateProps) {
//   return (
//     <div
//       className="relative w-full bg-white"
//       style={{
//         aspectRatio: '3000/3793',
//         maxWidth: forDownload ? '3000px' : '100%',
//       }}
//     >
//       {/* the background template Image */}
//       <img
//         src={baseImage}
//         alt="Conference Badge Template"
//         className="relative inset-0 w-full h-full object-cover"
//           style={{
//         aspectRatio: '3000/3793',
//         maxWidth: forDownload ? '3000px' : '100%',
//       }}
//       />

//       {/* User img */}
//       {userImage && (
//         <div
//           className="absolute overflow-hidden"
//           style={{
//             left: '9.2%',
//             top: '17.7%',
//             width: '42%',
//             height: '34%',
//             borderRadius: '10px',
//           }}
//         >
//           <img
//             src={userImage}
//             alt="User"
//             className="w-full h-full object-cover"
//              style={{ width: forDownload ? '1060px' : '100%' }}
//           />
//         </div>
//       )}

//       {userName && (
//         <div
//           className="relative"
//           style={{
//             left: '8.2%',
//             top: '-45.9%',
//             width: '85%',
//           }}
//         >
//           <p
//             className="font-semibold text-black"
//             style={{
//               fontSize: forDownload ? '50px' : 'clamp(18px, 1vw, 50px)',
//               lineHeight: '1',
//               wordBreak: 'break-word',
//             }}
//           >
//             {userName}
//           </p>
//         </div>
//       )}

//       {!forDownload && (
//         <div className="absolute inset-0 pointer-events-none bg-transparent md:bg-transparent" />
//       )}
//     </div>
//   )
// }

import baseImage from "../assets/BASE IMAGE.png";
interface BadgeTemplateProps {
  userName: string;
  userImage: string | null;
}

// Dynamic font size based on name length
// Uses vw (viewport width) units for true proportional scaling
// These values are calculated for 3000px target width
const getDynamicFontSize = (name: string): string => {
  const length = name.length;

  // vw units scale proportionally with container width
  // At 3000px: 1vw = 30px, so 1.67vw = 50px
  // At 448px: 1vw = 4.48px, so 1.67vw = 7.5px
  // Scales perfectly at any size!

  if (length <= 10) return "2.7vw"; // 50px at 3000px, ~7.5px at 448px
  if (length <= 15) return "2.5vw"; // 45px at 3000px, ~6.7px at 448px
  if (length <= 20) return "2.33vw"; // 40px at 3000px, ~6px at 448px
  if (length <= 25) return "2.17vw"; // 35px at 3000px, ~5.2px at 448px
  if (length <= 30) return "2vw"; // 30px at 3000px, ~4.5px at 448px
  return "0.83vw"; // 25px at 3000px, ~3.7px at 448px
};

export function BadgeTemplate({ userName, userImage }: BadgeTemplateProps) {
  return (
    <div
      className="relative w-full bg-white"
      style={{
        aspectRatio: "3000/3793"
      }}
    >
      {/* the background template Image */}
      <img
        src={baseImage}
        alt="Conference Badge Template"
        className="absolute inset-0 w-full h-full object-cover"
        // style={{
        //   aspectRatio: "3000/3793",
        //   maxWidth: forDownload ? "3000px" : "100%"
        // }}
      />

      {/* User img */}
      {userImage &&
        <div
          className="absolute overflow-hidden"
          style={{
            left: "9.4%",
            top: "19%",
            width: "42%",
            height: "35%",
            borderRadius: "14px"
          }}
        >
          <img
            src={userImage}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>}

      {userName &&
        <div
          className="absolute"
          style={{
            left: "8.2%",
            top: "58.3%",
            width: "85%"
          }}
        >
          <p
            className="font-semibold text-black"
            style={{
              fontSize: getDynamicFontSize(userName),
              lineHeight: "1.1",
              wordBreak: "break-word"
            }}
          >
            {userName}
          </p>
        </div>}
    </div>
  );
}


