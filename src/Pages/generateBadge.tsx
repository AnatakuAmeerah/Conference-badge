// import React, { useState, useRef } from 'react'
// import html2canvas from 'html2canvas'
// import { DownloadIcon, UploadIcon, UserIcon } from 'lucide-react'
// import { BadgeTemplate } from '../Components/badgeTemplate'

// export function ConferenceBadgeGenerator() {
//   const [userName, setUserName] = useState('')
//   // const [userTitle, setUserTitle] = useState('')
//   const [userImage, setUserImage] = useState<string | null>(null)
//   const [isDownloading, setIsDownloading] = useState(false)
//   const badgeRef = useRef<HTMLDivElement>(null)

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => setUserImage(reader.result as string)
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleDownload = async () => {
//     if (!badgeRef.current) return
//     setIsDownloading(true)

//     try {
//       const canvas = await html2canvas(badgeRef.current, {
//         scale: 3,
//         useCORS: true,
//         backgroundColor: null,
//       })

//       const image = canvas.toDataURL('image/png')
//       const link = document.createElement('a')
//       link.href = image
//       link.download = `conference-badge-${
//         userName.replace(/\s+/g, '-').toLowerCase() || 'attendee'
//       }.png`
//       link.click()
//     } catch (error) {
//       console.error('Error generating badge:', error)
//       alert('Failed to download badge. Please try again.')
//     } finally {
//       setIsDownloading(false)
//     }
//   }

//   const isComplete =
//     userName.trim() !== '' && userImage !== null

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">
//             Create Your Creatives' Voice Conference Badge
//           </h1>
//           <p className="text-gray-600">
//             Create your personalized badge for The Creatives' Voice Conference
//             2.0
//           </p>
//         </div>

//         {/*the main content is displayed here */}
//         <div className="grid lg:grid-cols-2 gap-8 items-start">
//           {/* preview*/}
//           <div className="bg-white rounded-2xl shadow-lg p-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Preview</h2>
//             <div ref={badgeRef} className="w-full max-w-md mx-auto">
//               <BadgeTemplate
//                 userName={userName}
//                 userImage={userImage}
//               />
//             </div>
//             {!userName && !userImage && (
//               <p className="text-center text-gray-500 mt-4 text-sm">
//                 Your badge preview will appear here
//               </p>
//             )}
//           </div>

//           {/* form section */}
//           <div className="bg-white rounded-2xl shadow-lg p-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">
//               Your Information
//             </h2>

//             {/* name inpput box */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <UserIcon className="inline w-4 h-4 mr-1" />
                
//                 Name
//               </label>
//               <input
//                 type="text"
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}
//                 placeholder="Enter your name"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
//               />
//             </div>

//             {/* img upload */}
//             <div className="mb-8">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <UploadIcon className="inline w-4 h-4 mr-1" />
//                 Profile Photo
//               </label>
//               <div className="flex items-center gap-4">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                   id="image-upload"
//                 />
//                 <label
//                   htmlFor="image-upload"
//                   className="flex-1 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 cursor-pointer transition text-center text-gray-600 hover:text-blue-600"
//                 >
//                   {userImage ? 'Change Photo' : 'Choose Photo'}
//                 </label>
//                 {userImage && (
//                   <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-200">
//                     <img
//                       src={userImage}
//                       alt="Preview"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 )}
//               </div>
//               <p className="text-xs text-gray-500 mt-2">
//                 Recommended: Square image, at least 500x500px
//               </p>
//             </div>

//             {/* download btn */}
//             <button
//               onClick={handleDownload}
//               disabled={!isComplete || isDownloading}
//               className={`w-full py-4 rounded-lg font-semibold text-white transition flex items-center justify-center gap-2 ${
//                 isComplete && !isDownloading
//                   ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
//                   : 'bg-gray-300 cursor-not-allowed'
//               }`}
//             >
//               <DownloadIcon className="w-5 h-5" />
//               {isDownloading ? 'Generating...' : 'Download Badge'}
//             </button>

//             {!isComplete && (
//               <p className="text-sm text-gray-500 text-center mt-3">
//                 Please add your name and photo to download
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import React, { useState, useRef } from 'react'
import html2canvas from 'html2canvas'
import { DownloadIcon, UploadIcon, UserIcon } from 'lucide-react'
import { BadgeTemplate } from '../Components/badgeTemplate'

export function ConferenceBadgeGenerator() {
  const [userName, setUserName] = useState('')
  // const [userTitle, setUserTitle] = useState('')
  const [userImage, setUserImage] = useState<string | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const badgeRef = useRef<HTMLDivElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setUserImage(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleDownload = async () => {
    if (!badgeRef.current) return
    setIsDownloading(true)

    try {
      // Calculate scale to get exactly 3000px width
      const currentWidth = badgeRef.current.offsetWidth
      const targetWidth = 3000
      const scale = targetWidth / currentWidth

      console.log('Preview width:', currentWidth)
      console.log('Calculated scale:', scale)
      console.log('Export width will be:', currentWidth * scale)

      const canvas = await html2canvas(badgeRef.current, {
        scale: scale,
        useCORS: true,
        backgroundColor: null,
      })

      console.log('Actual canvas dimensions:', canvas.width, 'x', canvas.height)

      const image = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = image
      link.download = `conference-badge-${
        userName.replace(/\s+/g, '-').toLowerCase() || 'attendee'
      }.png`
      link.click()
    } catch (error) {
      console.error('Error generating badge:', error)
      alert('Failed to download badge. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  const isComplete =
    userName.trim() !== '' && userImage !== null

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Create Your Creatives' Voice Conference Badge
          </h1>
          <p className="text-gray-600">
            Create your personalized badge for The Creatives' Voice Conference
            2.0
          </p>
        </div>

        {/*the main content is displayed here */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* preview*/}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Preview</h2>
            <div ref={badgeRef} className="w-full max-w-md mx-auto">
              <BadgeTemplate
                userName={userName}
                userImage={userImage}
              />
            </div>
            {!userName && !userImage && (
              <p className="text-center text-gray-500 mt-4 text-sm">
                Your badge preview will appear here
              </p>
            )}
          </div>

          {/* form section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Your Information
            </h2>

            {/* name inpput box */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <UserIcon className="inline w-4 h-4 mr-1" />

                Name
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
                maxLength={15}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
              <p className="text-xs text-gray-500 mt-1">
                {userName.length}/15 characters
              </p>
            </div>

            {/* img upload */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <UploadIcon className="inline w-4 h-4 mr-1" />
                Profile Photo
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="flex-1 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 cursor-pointer transition text-center text-gray-600 hover:text-blue-600"
                >
                  {userImage ? 'Change Photo' : 'Choose Photo'}
                </label>
                {userImage && (
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-200">
                    <img
                      src={userImage}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Recommended: Square image, at least 500x500px
              </p>
            </div>

            {/* download btn */}
            <button
              onClick={handleDownload}
              disabled={!isComplete || isDownloading}
              className={`w-full py-4 rounded-lg font-semibold text-white transition flex items-center justify-center gap-2 ${
                isComplete && !isDownloading
                  ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              <DownloadIcon className="w-5 h-5" />
              {isDownloading ? 'Generating...' : 'Download Badge'}
            </button>

            {!isComplete && (
              <p className="text-sm text-gray-500 text-center mt-3">
                Please add your name and photo to download
              </p>
            )}
          </div>
        </div>
      </div> 
    </div>
  )
}