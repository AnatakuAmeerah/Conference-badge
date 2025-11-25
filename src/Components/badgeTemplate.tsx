// this is the badge template component where the users data are overlaid on the image

import baseImage from '../assets/BASE IMAGE.png';
interface BadgeTemplateProps {
  userName: string
  userImage: string | null
  forDownload?: boolean
}

export function BadgeTemplate({
  userName,
  userImage,
  forDownload = false,
}: BadgeTemplateProps) {
  return (
    <div
      className="relative w-full bg-white"
      style={{
        aspectRatio: '3000/3793',
        maxWidth: forDownload ? '3000px' : '100%',
      }}
    >
      {/* the background template Image */}
      <img
        src={baseImage}
        alt="Conference Badge Template"
        className="relative inset-0 w-full h-full object-cover"
      />

      {/* User img */}
      {userImage && (
        <div
          className="absolute overflow-hidden"
          style={{
            left: '9.2%',
            top: '19.4%',
            width: '42%',
            height: '34%',
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

      {!forDownload && (
        <div className="absolute inset-0 pointer-events-none bg-transparent md:bg-transparent" />
      )}
    </div>
  )
}

