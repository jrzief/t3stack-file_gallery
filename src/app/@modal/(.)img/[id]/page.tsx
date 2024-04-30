import FullPageImageView from "~/components/full-image-page";
import { Modal } from "./modal";
//import { FullPageImageView } from "~/common/full-page-image-view";
//import { getImage } from "~/server/queries";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  //const image = await getImage(idAsNumber);
  return (
    <Modal>
      {/* @ts-expect-error FullPageImageView */}
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}