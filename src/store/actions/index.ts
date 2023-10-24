import * as controllActions from "./controllActions";
import * as templateActions from "./templatesActions";
import * as settingsActions from "./settingsActions";

export default {
    ...controllActions,
    ...templateActions,
    ...settingsActions
};
