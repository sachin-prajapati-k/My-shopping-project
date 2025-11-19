export interface IData {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  description: string;
}

type MealsProps = {
  meal: IData;
};

type IInput = {
  id: number;
  label: string;
  input: {
    type: string;
    max: number;
    min: number;
    defaultvalue: number;
  };
};

interface ICart {
  open: boolean;
  close: () => void | string;
  img?: string;
  title?: string;
  price?: number;
}

type IHeaderType = {
  ClickOpen: () => void;
  ClickClose?: () => void;
};

type IButtonClick = {
  onOpen: () => void;
};
