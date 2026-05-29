# Vanilla JS Case Converter Utility

This repository contains a core, dependency-free JavaScript object for robust string case conversions. 

Built for developers who need to sanitize database inputs, format JSON keys, or generate clean URLs without loading heavy libraries like Lodash. It safely handles spaces, punctuation, and existing camelCase structures.

For the full, interactive browser utility with real-time character counting and instant clipboard copy, visit the [NovusTools Case Converter](https://novustools.com/case-converter/).

## Specific String Formatters
You can also use our dedicated, single-purpose formatting tools:
* [CamelCase Converter](https://novustools.com/camelcase-converter/)
* [Snake_Case Converter](https://novustools.com/snakecase-converter/)
* [Kebab-Case Converter](https://novustools.com/kebabcase-converter/)
* [PascalCase Converter](https://novustools.com/pascalcase-converter/)
* [Title Case Converter](https://novustools.com/titlecase-converter/)

## Usage
Simply drop the `CaseConverter` object into your project and call the specific method (e.g., `CaseConverter.camelcase("Hello World")`). The engine automatically strips unsafe characters and formats the string perfectly.
