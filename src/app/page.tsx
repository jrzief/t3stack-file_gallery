import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/19b25f2b-eddb-43cc-bd85-fe29e0c3cc51-u09552.jpg",
  "https://utfs.io/f/1fb25fc2-8aa0-4b7a-9b13-0e9d080332a8-f5cv2y.jpg",
  "https://utfs.io/f/1200087d-ac5e-47ad-9465-3f319a023902-1x997g.jpg",
  "https://utfs.io/f/f2649a88-fe06-4693-a22e-2534cc64f8e1-c7mwtr.jpg",
  "https://utfs.io/f/b7ae8833-9e94-44f1-be6d-05d05e77232a-bdhzg2.mp3"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
         {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
           <div key={image.id + "-" + index} className="w-48">
              <img src={image.url} alt="" />
           </div>
         ))}
      </div>
    </main>
  );
}
