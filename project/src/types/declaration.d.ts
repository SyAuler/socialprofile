declare module "*.module.css";
declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}