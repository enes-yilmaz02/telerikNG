import { schema, Schema } from '@progress/kendo-angular-editor';
import { iframe } from './new-node';
import { tagMark } from './new-mark';

// Add the 'dir' attribute to paragraph node.
const paragraph = { ...schema.spec.nodes.get('paragraph') };
paragraph.attrs['dir'] = { default: null };
let nodes = schema.spec.nodes.update('paragraph', paragraph);

// Append the new node.
nodes = nodes.addToEnd('iframe', iframe as unknown);

// Append a new mark representing the <s> formatting tag.
const mark = tagMark('s');
const marks = schema.spec.marks.append(mark as any);

// Create the new schema.
export const mySchema: Schema = new Schema({ nodes, marks });
