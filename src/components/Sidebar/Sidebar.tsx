import FintechSVG from 'src/assets/FintechSVG';
import {
  ConfigsSVG,
  ContactSVG,
  SummarySVG,
  LogoutSVG,
  SalesSVG,
  WebhooksSVG,
} from 'src/assets/icons/index';

export default function Sidebar() {
  return (
    <nav className="sidebar box bg-3">
      <FintechSVG title="Logo" />
      <ul>
        <li>
          <span>
            <img src={SummarySVG} alt="" />
          </span>
          <a href="">Resumo</a>
        </li>

        <li>
          <span>
            <img src={SalesSVG} alt="" />
          </span>
          <a href="">Vendas</a>
        </li>

        <li>
          <span>
            <img src={WebhooksSVG} alt="" />
          </span>
          <a href="">Webhooks</a>
        </li>

        <li>
          <span>
            <img src={ConfigsSVG} alt="" />
          </span>
          <a href="">Configurações</a>
        </li>

        <li>
          <span>
            <img src={ContactSVG} alt="" />
          </span>
          <a href="">Contato</a>
        </li>

        <li>
          <span>
            <img src={LogoutSVG} alt="" />
          </span>
          <a href="">Sair</a>
        </li>
      </ul>
    </nav>
  );
}
