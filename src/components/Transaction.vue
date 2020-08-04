<template>
    <details>
        <summary>
            <div class="order">{{ changeOperationTypeName(transactionData.type) }}: <b>{{ transactionData.event_id }}</b></div>
            <div class="time"><time :datetime="transactionData.created_at">{{ transactionData.created_at }}</time></div>
            <div class="account">
                {{ transactionData.account_number }}
            </div>
            <div class="amount rubles positive">{{ transactionData.amount }}</div>
        </summary>
        <p class="description">{{ transactionData.description ? transactionData.description : "Нет описания операции" }}</p>
    </details>
</template>

<script>
  export default {
    name: "Transaction",
    props: {
      transactionData: Object
    },
    methods: {
      changeOperationTypeName(type) {
        return type == "PURCHASE" ? "Заказ" :
               type == "PURCHASE_BILL" ? "Счет" :
               type == "REFUND" ? "Возврат" :
               "Неизвестная операция"
      }
    },
  }
</script>

<style>
    #report ul li {
        position: relative;
        background: #27283C;
        margin-top: 10px;
        padding: 10px;
    }
    #report ul li:before {
        width: 40px;
        height: 40px;
        left: 10px;
        top: 16px;
        border-radius: 50%;
        background-color: #24A84D;
    }
    #report ul li:after {
        width: 36px;
        height: 36px;
        left: 12px;
        top: 18px;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3207673/credit-card--white.svg);
    }
    #report ul li summary {
        padding-left: 50px;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        z-index: 1;
    }
    #report ul li summary::-webkit-details-marker {
        display: none;
    }
    #report ul li div {
        line-height: 26px;
    }
    #report ul li p {
        text-align: left;
        color: #587d6c;
    }
    #report ul li .order {
        order: 1;
        flex-basis: 55%;
        text-align: left;
    }
    #report ul li .amount {
        order: 2;
        font-size: 18px;
        font-weight: 800;
        flex-basis: 45%;
        text-align: right;
        color: #FFF;
    }
    #report ul li .amount.negative {
        color: #D87822;
    }
    #report ul li .amount.negative:before {
        content: "- ";
    }
    #report ul li .amount.positive {
        color: #39b27c;
    }
    #report ul li .amount.positive:before {
        content: "+ ";
    }
    #report ul li .amount.rubles:after {
        content: " ₽";
    }
    #report ul li .time {
        order: 3;
        flex-basis: 30%;
        text-align: left;
    }
    #report ul li .account {
        order: 4;
        flex-basis: 70%;
        text-align: right;
    }
    #report ul .description {
        margin-top: 10px;
        padding-bottom: 10px;
        padding: 10px;
        background-color: #CCC;
        border-radius: 4px;
        overflow: hidden;
        color: #212121;
    }
    #report ul .description div {
        padding: 10px;
    }
    #report ul .description div:first-child {
        background-color: #58B4B4;
    }
    #report ul .description a {
        color: #9B51E0;
    }
</style>
