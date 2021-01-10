<template>
  <vuetable ref="vuetable"
    api-url="http://openlibrary.org/people/george08/lists.json"
    :fields="['name', {name: 'last_update', title: 'Last Update'}, 'edition_count']"
    data-path="entries"
    pagination-path=""
  ></vuetable>
</template>

<script>
import Vuetable from 'vuetable-2'

export default {
  components: {
    Vuetable
  }
}
</script>