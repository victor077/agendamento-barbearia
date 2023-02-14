import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { ServicosValues, initialAlternative } from "./Types";

type CreateQuestionContextValues = {
  alternatives: ServicosValues[];
  isLessThanFourItems: boolean;
  changeCurrentValue: (data: ServicosValues) => void;
  addNewOption: () => void;
  removeOptionById: (id: number) => void;
  handleSubmit: () => void;
};
const CreateQuestionContext = createContext<CreateQuestionContextValues>(
  {} as CreateQuestionContextValues
);
const CreateQuestionProvider = ({ children }: PropsWithChildren) => {
  const [alternatives, setAlternatives] =
    useState<ServicosValues[]>(initialAlternative);

  const isLessThanFourItems = alternatives.length < 4;
  const haveAtLestOneItem = alternatives.length > 1;

  const changeCurrentValue = (data: ServicosValues) => {
    const updateAlternative = alternatives.map((alternative) => {
      if (alternative.idServico === data.idServico) {
        return { ...alternative, ...data };
      }
      return alternative;
    });
    setAlternatives(updateAlternative);
  };
  const greaterId = () => {
    return alternatives.reduce(
      (maxId, item) => Math.max(maxId, item.idServico),
      0
    );
  };
  const addNewOption = () => {
    isLessThanFourItems &&
      setAlternatives((prevState) => [
        ...prevState,
        { idServico: greaterId() + 1, nm_servico: "", preco: 0, tempo: 0 },
      ]);
  };
  const removeOptionById = (id: number) => {
    if (haveAtLestOneItem) {
      const _alternatives = alternatives.filter(
        (alternative) => alternative.idServico !== id
      );
      setAlternatives(_alternatives);
    }
  };
  const handleSubmit = useCallback(() => {
    console.log(alternatives);
    // mutate({
    //   title,
    //   alternatives,
    // })
  }, [alternatives]);
  const values = {
    changeCurrentValue,
    isLessThanFourItems,
    addNewOption,
    removeOptionById,
    handleSubmit,
    alternatives,
  };
  return (
    <CreateQuestionContext.Provider value={values}>
      {children}
    </CreateQuestionContext.Provider>
  );
};
export const useService = () => {
  const context = useContext(CreateQuestionContext);
  if (!context) {
    throw new Error("useService dentro de um CreateQuestionProvider");
  }
  return context;
};

export default CreateQuestionProvider;
