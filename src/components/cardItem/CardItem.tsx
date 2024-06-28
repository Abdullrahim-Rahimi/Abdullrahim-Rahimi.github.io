import Image from 'next/image';
import { Button } from '../ui/button';

interface IPropsCardItem {
  srcImage: string;
  title: string;
  description: string;
}
export const CardItem = ({ srcImage, title, description }: IPropsCardItem) => {
  return (
    <li className="flex flex-col">
      <div>
        <Image src={srcImage} alt="" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button className="w-full" variant="outline">
          Find Out More
        </Button>
      </div>
    </li>
  );
};
