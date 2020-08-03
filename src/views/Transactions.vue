<template>
    <main>
        <div v-if="loading">
            <Loader/>
        </div>
        <div v-if="!loading && transactions.length">
            <div v-for="(transaction, index) in transactions" :key="index">
                {{ transaction.created_at }}
            </div>
        </div>
        <div v-else-if="!loading && !transactions.length">
            No transactions found.
        </div>
    </main>

</template>

<script>
  import Loader from "../components/Loader";
  export default {
    name: "Transactions",
    components: {Loader},
    data() {
      return {
        loading: true,
        transactions: [],
      }
    },
    mounted() {
      return this.$api.get('/transactions/page/1')
        .then(response => {
          console.log(response);
          this.transactions = response.data.result;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
</script>

<style scoped>

</style>
