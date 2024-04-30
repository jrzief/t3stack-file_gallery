//import { Modal } from "./modal";

import FullPageImageView from "~/components/full-image-page";


export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  //const image = await getImage(idAsNumber);
   {/* @ts-expect-error FullPageImageView */}
  return <FullPageImageView id={idAsNumber} />;
  
}