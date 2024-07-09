#### What is JSX?
- JSX  is a HTML like structure. Is is primarily used in react.
- Declarative Syntax, Component Reusability, Tooling and Ecosystem(JSX is well-supported by a rich ecosystem of tools, libraries, and frameworks (especially React)) and Developer Experience.

#### Super powers of JSX
- combines HTML and JavaScript
- Easier and cleaner syntax
- fill power of javascript
- Integration of components
- static type checking 
- prevents injection attacks
- build tool integration - JSX needs to be transformed into regular JavaScript before it can be interpreted by browsers. Build tools like Babel are commonly used to convert JSX into JavaScript that browsers can understand.

#### Role of type attribute in script tag? What options can I use there?
- The type attribute in the `<script>` tag specifies the media type (MIME type) of the script content. Its role is to indicate to the browser how to interpret and execute the script code within the `<script>` tag.
##### Types
- Omitted or Empty(`type="`) - the default value is `text/javascript`
- Module (`type="module"`) - Specifies that the script is a module script. Module scripts are separate files that allow for more modular and reusable code using features like `import` and `export`.
- Legacy JavaScript (`type="text/ecmascript"`) - Indicates that the script contains ECMAScript (JavaScript) code. This was used in older HTML versions but is rarely used now as `text/javascript` has become the standard.
- Other Types - While less common, you can specify other types like `application/javascript` or `text/x-javascript`. However, these are not widely supported or recommended.