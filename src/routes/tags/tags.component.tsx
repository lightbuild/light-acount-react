import {Routes, Route} from 'react-router-dom';

import TagsPreview from '../tags-preview/tags-preview.component';
import TagEdit from '../tag-edit/tag-edit.component';

const Tags = () => {
  return (
    <Routes>
      <Route index element={<TagsPreview/>}/>
      <Route path=":tag" element={<TagEdit/>}/>
    </Routes>
  )
};

export default Tags;