//declaration to resolve file import error
declare module "*.jpg" {
  const content: string;
  export default content;
}
declare module "*.png" {
  const content: string;
  export default content;
}
declare module "*.gif" {
  const content: string;
  export default content;
}
