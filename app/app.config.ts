export default defineAppConfig<{
    apiPrefix: string;
    theme: { mainColor: string };
}>({
    apiPrefix: "/api",
    theme: { mainColor: "#000000" },
});
