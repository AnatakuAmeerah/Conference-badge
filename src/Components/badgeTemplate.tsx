// this is the badge template component where the users data are overlaid on the image

import baseImage from '../assets/BASE IMAGE.png';

// interface BadgeTemplateProps {
//   userName: string
//   userTitle:string
//   userImage: string | null
//   forDownload?: boolean
// }
// export function BadgeTemplate({
//   userName,
//   userImage,
//   userTitle,
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
//       {/* Background Template Image */}
//       <img
//         src={baseImage}
//         alt="Conference Badge Template"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* User Image Overlay - positioned in the blue rounded square */}
//       {userImage && (
//         <div
//           className="absolute overflow-hidden"
//           style={{
//             left: '9.7%',
//             top: '19%',
//             width: '41%',
//             height: '35%',
//             borderRadius: '10px',
//           }}
//         >
//           <img
//             src={userImage}
//             alt="User"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       )}

//       {/* User Name Overlay - positioned below "Is Attending" */}
//       {userName && (
//         <div
//           className="absolute"
//           style={{
//             left: '8.7%',
//             top: '55.5%',
//             width: '100%',
//           }}
//         >
//           <p
//             className="font-medium text-black"
//             style={{
//               fontSize: forDownload ? '30px' : 'clamp(16px, 3.6vw, 30px)',
//               lineHeight: '1.2',
//               wordBreak: 'break-word',
//             }}
//           >
//             {userName}
//           </p>
//         </div>
//       )}
//         {userTitle && (
//         <div
//           className="absolute"
//           style={{
//             left: '8.7%',
//             top: '60.5%',
//             width: '50%',
//           }}
//         >
//           <p
//             className="font-small text-black"
//             style={{
//               fontSize: forDownload ? '13px' : 'clamp(10px, 1.4vw, 13px)',
//               lineHeight: '1',
//               wordBreak: 'break-word',
//             }}
//           >
//             {userTitle}
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }

interface BadgeTemplateProps {
  userName: string
  userTitle: string
  userImage: string | null
  forDownload?: boolean
}

export function BadgeTemplate({
  userName,
  userTitle,
  userImage,
  forDownload = false,
}: BadgeTemplateProps) {
  return (
    <div
      className="relative w-full bg-white"
      style={{
        aspectRatio: '3000/3793', // exact aspect ratio of your base image
        maxWidth: forDownload ? '3000px' : '100%',
      }}
    >
      {/* Background Template Image */}
      <img
        src={baseImage}
        alt="Conference Badge Template"
        className="relative inset-0 w-full h-full object-cover"
      />

      {/* User Image */}
      {userImage && (
        <div
          className="absolute overflow-hidden"
          style={{
            left: '9.2%',
            top: '17.7%',
            width: '42%',
            height: '32%',
            borderRadius: '10px',
          }}
        >
          <img
            src={userImage}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* User Name */}
      {userName && (
        <div
          className="relative"
          style={{
            left: '8.2%',
            top: '-45.9%',
            width: '85%',
          }}
        >
          <p
            className="font-semibold text-black"
            style={{
              fontSize: forDownload ? '50px' : 'clamp(18px, 1vw, 50px)',
              lineHeight: '1',
              wordBreak: 'break-word',
            }}
          >
            {userName}
          </p>
        </div>
      )}

      {/* User Title */}
      {userTitle && (
        <div
          className="relative"
          style={{
            left: '8.2%',
            top: '-46%',
            width: '85%',
          }}
        >
          <p
            className="font-normal text-black"
            style={{
              fontSize: forDownload ? '35px' : 'clamp(12px, 1vw, 35px)',
              lineHeight: '1',
              wordBreak: 'break-word',
            }}
          >
            {userTitle}
          </p>
        </div>
      )}

      {/* Optional: Add a subtle shadow overlay for better contrast on small screens */}
      {!forDownload && (
        <div className="absolute inset-0 pointer-events-none bg-transparent md:bg-transparent" />
      )}
    </div>
  )
}

