/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aD3xWYSe3XH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from 'next/image'

import client from 'images/client-1.png'
import client1 from 'images/client-2.png'
import client2 from 'images/client-3.png'
import client3 from 'images/client-5.png'
import client4 from 'images/client-6.png'

export function Logo() {
  return (
      <div className="flex justify-center gap-4 mx-32">
          <Image
            alt="Hero"
            className="flex aspect-auto overflow-hidden px-4 rounded-sm w-24"
            // height="25"
            src={client}
            // width="25"
          />
          <Image
            alt="Hero"
            className="flex aspect-auto overflow-hidden px-4 rounded-sm w-24"
            // height="25"
            src={client1}
            // width="25"
          />
          <Image
            alt="Hero"
            className="flex aspect-auto overflow-hidden px-4 rounded-sm w-24"
            // height="25"
            src={client2}
            // width="25"
          />
          <Image
            alt="Hero"
            className="flex aspect-auto overflow-hidden px-4 rounded-sm w-24"
            // height="25"
            src={client3}
            // width="25"
          />
          <Image
            alt="Hero"
            className="flex aspect-auto overflow-hidden px-4 rounded-sm w-24"
            // height="25"
            src={client4}
            // width="25"
          />
      </div>

  )
}

