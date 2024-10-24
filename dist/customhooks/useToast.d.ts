import { ToastDto } from "./Dtos/Toast.dto";
import { ServerResponseDto } from "./Dtos/ServerResponse.dto";
declare const useToast: () => {
    toast: ToastDto;
    changeToast: (data: ServerResponseDto) => void;
};
export default useToast;
