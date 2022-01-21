import Toast from "./Toast.vue";
import {createApp, h} from "vue";

type Options = {
    message: string,
    onClose?: () => void,
    position: 'top' | 'middle' | 'bottom',
    autoClose?: number
}
export const showToast = (options: Options) => {
    const {message, onClose, position, autoClose} = options;
    const div = document.createElement("div");
    document.body.appendChild(div);
    const close = () => {
        app.unmount(div);
        div.remove();
    };
    const app = createApp({
        render() {
            return h(
                Toast,
                {
                    visible: true,
                    "onUpdate:visible": (newVisible) => {
                        if (newVisible === false) {
                            close();
                        }
                    },
                    onClose,
                    autoClose,
                    position
                },
                {
                    message
                }
            );
        },
    });
    app.mount(div);
};
