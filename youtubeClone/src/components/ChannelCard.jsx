import React from 'react'
import { GoVerified } from 'react-icons/go'
import { Link } from 'react-router-dom'
function ChannelCard({channel,channelPage}) {
  console.log("Channel Opened : ",channel)
  return (
    <Link to={`/channel/${channel?.id?.channelId}`}>
    <div className={`${channelPage==false?"":"-mt-20"} shadow-lg cursor-pointer flex flex-col justify-center items-center px-3 min-w-80`}>
      <img src={channel?.snippet?.thumbnails.high.url} alt="" className='rounded-full object-cover min-h-44 h-44 '/>
      <div className='flex flex-row mt-3 gap-x-2 justify-center items-end'>
      <span className={`${channelPage==false?"":"text-xl"}`}>{channel?.snippet?.channelTitle || channel?.snippet?.title}</span>
      <GoVerified className='text-base mb-1 '/>
      </div>
      {channel?.statistics && <span className='text-base font-light mt-2'>{Number(channel?.statistics?.subscriberCount).toLocaleString()} subscribers</span>
      }
    </div>
    </Link>
    
  )
}

export default ChannelCard
