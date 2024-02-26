// import { getRemoteFileContent } from "../utils";

export default eventHandler(async <T extends RemoteFileType>(event) => {
	const { name, url, type } = getQuery<GetRemoteFileParams<T>>(event);

	return await getRemoteFileContent({ name, url, type });
});
